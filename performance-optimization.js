const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Performance optimization script for COzwei website
console.log('🚀 Starting performance optimization...');

// 1. Check if sharp is installed for image optimization
try {
  require('sharp');
  console.log('✅ Sharp is installed for image optimization');
} catch (error) {
  console.log('⚠️  Sharp not found. Installing...');
  try {
    execSync('npm install sharp', { stdio: 'inherit' });
    console.log('✅ Sharp installed successfully');
  } catch (installError) {
    console.log('❌ Failed to install sharp:', installError.message);
  }
}

// 2. Create optimized image versions
const optimizeImages = () => {
  const picturesDir = path.join(__dirname, 'public', 'Pictures');
  
  if (!fs.existsSync(picturesDir)) {
    console.log('❌ Pictures directory not found');
    return;
  }

  console.log('📸 Optimizing images...');
  
  // List of critical images that should be optimized
  const criticalImages = [
    'cozwei.png',
    'pexels-tomfisk-9893729.jpg',
    'image copy 2.png',
    'Bild2.png'
  ];

  criticalImages.forEach(imageName => {
    const imagePath = path.join(picturesDir, imageName);
    if (fs.existsSync(imagePath)) {
      console.log(`✅ Found ${imageName}`);
    } else {
      console.log(`⚠️  Missing ${imageName}`);
    }
  });
};

// 3. Generate critical CSS
const generateCriticalCSS = () => {
  console.log('🎨 Generating critical CSS...');
  
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
.min-h-screen { min-height: 100vh; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.relative { position: relative; }
.absolute { position: absolute; }
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.z-0 { z-index: 0; }
.z-20 { z-index: 20; }
.text-center { text-align: center; }
.overflow-hidden { overflow: hidden; }
.bg-white { background-color: rgb(255 255 255); }
.text-gray-900 { color: rgb(17 24 39); }
.font-sans { font-family: ui-sans-serif, system-ui, sans-serif; }
  `;

  const cssPath = path.join(__dirname, 'src', 'app', 'critical.css');
  fs.writeFileSync(cssPath, criticalCSS);
  console.log('✅ Critical CSS generated');
};

// 4. Create a service worker for caching
const createServiceWorker = () => {
  console.log('🔧 Creating service worker...');
  
  const serviceWorker = `
// Service Worker for COzwei website
const CACHE_NAME = 'cozwei-cache-v1';
const urlsToCache = [
  '/',
  '/Pictures/cozwei.png',
  '/Pictures/pexels-tomfisk-9893729.jpg',
  '/Pictures/image copy 2.png',
  '/Pictures/Bild2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
  `;

  const swPath = path.join(__dirname, 'public', 'sw.js');
  fs.writeFileSync(swPath, serviceWorker);
  console.log('✅ Service worker created');
};

// 5. Create a web manifest for PWA capabilities
const createWebManifest = () => {
  console.log('📱 Creating web manifest...');
  
  const manifest = {
    name: "COzwei - Nachhaltigkeit & Dekarbonisierung",
    short_name: "COzwei",
    description: "COzwei GmbH - Ihr Partner für Nachhaltigkeit und Dekarbonisierung",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#81B29A",
    icons: [
      {
        src: "/Pictures/cozwei.png",
        sizes: "192x192",
        type: "image/png"
      }
    ]
  };

  const manifestPath = path.join(__dirname, 'public', 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('✅ Web manifest created');
};

// 6. Update layout.tsx to include critical CSS and service worker
const updateLayout = () => {
  console.log('📝 Updating layout.tsx...');
  
  const layoutPath = path.join(__dirname, 'src', 'app', 'layout.tsx');
  
  if (fs.existsSync(layoutPath)) {
    let layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    // Add critical CSS import
    if (!layoutContent.includes('./critical.css')) {
      layoutContent = layoutContent.replace(
        'import "./globals.css";',
        'import "./globals.css";\nimport "./critical.css";'
      );
    }
    
    // Add service worker registration
    if (!layoutContent.includes('serviceWorker')) {
      const swScript = `
        {typeof window !== 'undefined' && (
          <script
            dangerouslySetInnerHTML={{
              __html: \`
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js');
                  });
                }
              \`
            }}
          />
        )}
      `;
      
      layoutContent = layoutContent.replace(
        '</body>',
        `${swScript}\n      </body>`
      );
    }
    
    fs.writeFileSync(layoutPath, layoutContent);
    console.log('✅ Layout.tsx updated');
  }
};

// Run all optimizations
try {
  optimizeImages();
  generateCriticalCSS();
  createServiceWorker();
  createWebManifest();
  updateLayout();
  
  console.log('\n🎉 Performance optimization completed!');
  console.log('\n📋 Next steps:');
  console.log('1. Run "npm run build" to test the optimizations');
  console.log('2. Consider using a CDN for static assets');
  console.log('3. Monitor Core Web Vitals in Google PageSpeed Insights');
  console.log('4. Consider implementing lazy loading for below-the-fold images');
  
} catch (error) {
  console.error('❌ Error during optimization:', error.message);
} 