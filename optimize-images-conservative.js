const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Conservative configuration for image optimization
const config = {
  jpeg: {
    quality: 85, // Higher quality than before
    progressive: true,
    mozjpeg: true,
    force: false
  },
  png: {
    quality: 90, // Higher quality than before
    compressionLevel: 6, // Less aggressive compression
    progressive: true,
    force: false
  },
  webp: {
    quality: 85, // Higher quality than before
    effort: 4 // Less aggressive compression
  }
};

// Function to get file size in MB
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Function to check if file is already optimized (small enough)
function isAlreadyOptimized(filePath) {
  const size = parseFloat(getFileSize(filePath));
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip optimization if file is already small
  if (ext === '.png' && size < 0.5) return true;
  if (ext === '.jpg' && size < 0.8) return true;
  if (ext === '.jpeg' && size < 0.8) return true;
  
  return false;
}

// Function to optimize a single image conservatively
async function optimizeImageConservative(inputPath, outputPath) {
  try {
    // Skip if already optimized
    if (isAlreadyOptimized(inputPath)) {
      console.log(`⏭️  Skipping ${path.basename(inputPath)} - already optimized`);
      return null;
    }

    const inputBuffer = fs.readFileSync(inputPath);
    const originalSize = getFileSize(inputPath);
    
    // Get image metadata
    const metadata = await sharp(inputBuffer).metadata();
    
    let optimizedBuffer;
    const ext = path.extname(inputPath).toLowerCase();
    
    if (ext === '.jpg' || ext === '.jpeg') {
      optimizedBuffer = await sharp(inputBuffer)
        .jpeg(config.jpeg)
        .toBuffer();
    } else if (ext === '.png') {
      // For PNGs, only optimize if they're large
      if (parseFloat(originalSize) > 1.0) {
        optimizedBuffer = await sharp(inputBuffer)
          .png(config.png)
          .toBuffer();
      } else {
        console.log(`⏭️  Skipping ${path.basename(inputPath)} - PNG under 1MB`);
        return null;
      }
    } else {
      // For other formats, keep as is
      console.log(`⏭️  Skipping ${path.basename(inputPath)} - unsupported format`);
      return null;
    }
    
    // Only write if the optimized version is actually smaller
    const optimizedSize = (optimizedBuffer.length / (1024 * 1024)).toFixed(2);
    const originalSizeNum = parseFloat(originalSize);
    const optimizedSizeNum = parseFloat(optimizedSize);
    
    if (optimizedSizeNum >= originalSizeNum) {
      console.log(`⏭️  Skipping ${path.basename(inputPath)} - optimization would increase size`);
      return null;
    }
    
    // Write optimized image
    fs.writeFileSync(outputPath, optimizedBuffer);
    
    const reduction = ((originalSizeNum - optimizedSizeNum) / originalSizeNum * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${originalSize}MB → ${optimizedSize}MB (${reduction}% reduction)`);
    
    return {
      original: originalSizeNum,
      optimized: optimizedSizeNum,
      reduction: parseFloat(reduction)
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

// Function to process all images in a directory conservatively
async function processDirectoryConservative(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory ${dirPath} does not exist`);
    return { original: 0, optimized: 0, reduction: 0 };
  }
  
  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });
  
  console.log(`\n📁 Processing ${imageFiles.length} images in ${dirPath}...`);
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;
  
  for (const file of imageFiles) {
    const inputPath = path.join(dirPath, file);
    const outputPath = path.join(dirPath, file);
    
    const result = await optimizeImageConservative(inputPath, outputPath);
    if (result) {
      totalOriginalSize += result.original;
      totalOptimizedSize += result.optimized;
      processedCount++;
    }
  }
  
  if (processedCount > 0) {
    const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n📊 Summary for ${dirPath}:`);
    console.log(`   Processed: ${processedCount}/${imageFiles.length} images`);
    console.log(`   Original: ${totalOriginalSize.toFixed(2)}MB`);
    console.log(`   Optimized: ${totalOptimizedSize.toFixed(2)}MB`);
    console.log(`   Total reduction: ${totalReduction}%`);
  } else {
    console.log(`\n📊 Summary for ${dirPath}: No images needed optimization`);
  }
  
  return {
    original: totalOriginalSize,
    optimized: totalOptimizedSize,
    reduction: processedCount > 0 ? parseFloat(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)) : 0
  };
}

// Main function
async function main() {
  console.log('🚀 Starting conservative image optimization...\n');
  
  const directories = [
    'public/Pictures',
    'public/Pictures/Logos Kunden',
    'public/Pictures/Logos Partner'
  ];
  
  let grandTotalOriginal = 0;
  let grandTotalOptimized = 0;
  
  for (const dir of directories) {
    const result = await processDirectoryConservative(dir);
    grandTotalOriginal += result.original;
    grandTotalOptimized += result.optimized;
  }
  
  if (grandTotalOriginal > 0) {
    const grandTotalReduction = ((grandTotalOriginal - grandTotalOptimized) / grandTotalOriginal * 100).toFixed(1);
    
    console.log('\n🎉 Overall Summary:');
    console.log(`   Total original size: ${grandTotalOriginal.toFixed(2)}MB`);
    console.log(`   Total optimized size: ${grandTotalOptimized.toFixed(2)}MB`);
    console.log(`   Total space saved: ${(grandTotalOriginal - grandTotalOptimized).toFixed(2)}MB`);
    console.log(`   Overall reduction: ${grandTotalReduction}%`);
  } else {
    console.log('\n🎉 All images are already optimized!');
  }
  
  console.log('\n✨ Conservative image optimization complete!');
}

// Run the script
main().catch(console.error); 