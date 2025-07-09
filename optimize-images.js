const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration for image optimization
const config = {
  jpeg: {
    quality: 80,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 85,
    compressionLevel: 9,
    progressive: true
  },
  webp: {
    quality: 80,
    effort: 6
  }
};

// Function to get file size in MB
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Function to optimize a single image
async function optimizeImage(inputPath, outputPath, format = 'auto') {
  try {
    const inputBuffer = fs.readFileSync(inputPath);
    const originalSize = getFileSize(inputPath);
    
    let optimizedBuffer;
    
    if (format === 'auto') {
      // Determine format based on file extension
      const ext = path.extname(inputPath).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg') {
        optimizedBuffer = await sharp(inputBuffer)
          .jpeg(config.jpeg)
          .toBuffer();
      } else if (ext === '.png') {
        optimizedBuffer = await sharp(inputBuffer)
          .png(config.png)
          .toBuffer();
      } else {
        // For other formats, convert to WebP
        optimizedBuffer = await sharp(inputBuffer)
          .webp(config.webp)
          .toBuffer();
        outputPath = outputPath.replace(/\.[^.]+$/, '.webp');
      }
    } else if (format === 'webp') {
      optimizedBuffer = await sharp(inputBuffer)
        .webp(config.webp)
        .toBuffer();
      outputPath = outputPath.replace(/\.[^.]+$/, '.webp');
    }
    
    // Write optimized image
    fs.writeFileSync(outputPath, optimizedBuffer);
    
    const optimizedSize = getFileSize(outputPath);
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${originalSize}MB → ${optimizedSize}MB (${reduction}% reduction)`);
    
    return {
      original: originalSize,
      optimized: optimizedSize,
      reduction: parseFloat(reduction)
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

// Function to process all images in a directory
async function processDirectory(dirPath, outputDir = null) {
  if (!outputDir) {
    outputDir = dirPath;
  }
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'].includes(ext);
  });
  
  console.log(`\n📁 Processing ${imageFiles.length} images in ${dirPath}...`);
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const file of imageFiles) {
    const inputPath = path.join(dirPath, file);
    const outputPath = path.join(outputDir, file);
    
    const result = await optimizeImage(inputPath, outputPath);
    if (result) {
      totalOriginalSize += parseFloat(result.original);
      totalOptimizedSize += parseFloat(result.optimized);
    }
  }
  
  const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`\n📊 Summary for ${dirPath}:`);
  console.log(`   Original: ${totalOriginalSize.toFixed(2)}MB`);
  console.log(`   Optimized: ${totalOptimizedSize.toFixed(2)}MB`);
  console.log(`   Total reduction: ${totalReduction}%`);
  
  return {
    original: totalOriginalSize,
    optimized: totalOptimizedSize,
    reduction: parseFloat(totalReduction)
  };
}

// Main function
async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  const directories = [
    'public/Pictures',
    'public/Pictures/Logos Kunden',
    'public/Pictures/Logos Partner'
  ];
  
  let grandTotalOriginal = 0;
  let grandTotalOptimized = 0;
  
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      const result = await processDirectory(dir);
      grandTotalOriginal += result.original;
      grandTotalOptimized += result.optimized;
    }
  }
  
  const grandTotalReduction = ((grandTotalOriginal - grandTotalOptimized) / grandTotalOriginal * 100).toFixed(1);
  
  console.log('\n🎉 Overall Summary:');
  console.log(`   Total original size: ${grandTotalOriginal.toFixed(2)}MB`);
  console.log(`   Total optimized size: ${grandTotalOptimized.toFixed(2)}MB`);
  console.log(`   Total space saved: ${(grandTotalOriginal - grandTotalOptimized).toFixed(2)}MB`);
  console.log(`   Overall reduction: ${grandTotalReduction}%`);
  console.log('\n✨ Image optimization complete!');
}

// Run the script
main().catch(console.error); 