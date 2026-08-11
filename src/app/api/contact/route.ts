import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Nur Production verschickt echte Mails. Staging- und Preview-Deployments
    // quittieren die Absendung erfolgreich, versenden aber nichts, damit
    // Testeingaben nicht im echten Postfach landen.
    if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
      console.info(`Kontaktformular auf ${process.env.VERCEL_ENV}: Versand unterdrueckt`);
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    }

    // Check if environment variables are set
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('Missing environment variables:', {
        SMTP_HOST: smtpHost ? 'set' : 'missing',
        SMTP_PORT: smtpPort ? 'set' : 'missing',
        SMTP_USER: smtpUser ? 'set' : 'missing',
        SMTP_PASS: smtpPass ? 'set' : 'missing'
      });
      return NextResponse.json(
        { message: 'Email configuration is incomplete. Please contact support.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { message: 'Email server connection failed. Please try again later.' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: smtpUser,
      to: 'mail@cozwei.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3D405B; border-bottom: 2px solid #81B29A; padding-bottom: 10px;">
            Neue Kontaktanfrage über COzwei Website
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3D405B; margin-top: 0;">Kontaktdaten:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3D405B; margin-top: 0;">Nachricht:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Diese E-Mail wurde automatisch über das Kontaktformular der COzwei Website gesendet.</p>
            <p>Zeitstempel: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
          </div>
        </div>
      `,
      text: `
Neue Kontaktanfrage über COzwei Website

Kontaktdaten:
Name: ${name}
E-Mail: ${email}
${company ? `Unternehmen: ${company}` : ''}

Nachricht:
${message}

---
Diese E-Mail wurde automatisch über das Kontaktformular der COzwei Website gesendet.
Zeitstempel: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
      `,
    };

    // Send email
    console.log('Attempting to send email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
} 