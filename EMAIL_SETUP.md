# Email Setup Guide for COzwei Contact Form

## Overview
The contact form is now fully functional and will send emails to `mail@cozwei.de` when someone submits the form.

## Environment Variables Setup

You need to configure the following environment variables in your Vercel project:

### For Gmail (Recommended for testing):
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### For Outlook/Office365:
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### For custom SMTP server:
```
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
```

## Gmail App Password Setup

If you're using Gmail, you need to create an "App Password":

1. Go to your Google Account settings: https://myaccount.google.com/
2. Enable 2-factor authentication if not already enabled
3. Go to Security > App passwords
4. Select "Mail" as the app
5. Generate the password and use it as `SMTP_PASS`

## Vercel Configuration

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each environment variable:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
4. Deploy your project

## Features

- ✅ Form validation (name, email, message required)
- ✅ Email format validation
- ✅ Success/error feedback to users
- ✅ Professional HTML email template
- ✅ German localization
- ✅ Loading states during submission
- ✅ Form reset after successful submission

## Email Template

The emails sent to `mail@cozwei.de` include:
- Contact information (name, email, company)
- Message content
- Timestamp
- Professional styling with COzwei branding colors

## Testing

To test the contact form:
1. Fill out the form on any page
2. Submit the form
3. Check your email at `mail@cozwei.de`
4. You should receive a formatted email with all the form data

## Troubleshooting

If emails aren't being sent:
1. Check Vercel function logs in the dashboard
2. Verify environment variables are set correctly
3. Ensure your SMTP credentials are valid
4. Check if your email provider allows SMTP access 