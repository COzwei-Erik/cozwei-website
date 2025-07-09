const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Critical files that need immediate optimization
const criticalFiles = [
  'public/Pictures/Bild+Logo_V2+Farbe.png',
  'public/Pictures/image copy 6.png',
  'public/Pictures/pexels-marcin-jozwiak-199600-3641377.jpg',
  'public/Pictures/pexels-rdne-7948058.jpg',
  'public/Pictures/pexels-tomfisk-9893729.jpg',
  'public/Pictures/WhatsApp Bild 2025-06-15 um 19.04.26_0e38abfb.jpg'
];

// Function to get file size in MB
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Function to optimize a critical image
async function optimizeCriticalImage(inputPath) {
  try {
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  File not found: ${inputPath}`);
      return null;
    }

    const inputBuffer = fs.readFileSync(inputPath);
    const originalSize = getFileSize(inputPath);
    const ext = path.extname(inputPath).toLowerCase();
    
    console.log(`\n🔄 Processing: ${path.basename(inputPath)} (${originalSize}MB)`);
    
    let optimizedBuffer;
    let outputPath = inputPath;
    
    if (ext === '.png') {
      // For PNGs, try to convert to WebP for better compression
      try {
        optimizedBuffer = await sharp(inputBuffer)
          .webp({ quality: 85, effort: 6 })
          .toBuffer();
        
        outputPath = inputPath.replace('.png', '.webp');
        console.log(`   Converting PNG to WebP for better compression`);
      } catch (error) {
        console.log(`   WebP conversion failed, optimizing PNG instead`);
        optimizedBuffer = await sharp(inputBuffer)
          .png({ quality: 85, compressionLevel: 6, progressive: true })
          .toBuffer();
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      optimizedBuffer = await sharp(inputBuffer)
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toBuffer();
    } else {
      console.log(`   ⏭️  Skipping - unsupported format: ${ext}`);
      return null;
    }
    
    // Check if optimization actually reduced size
    const optimizedSize = (optimizedBuffer.length / (1024 * 1024)).toFixed(2);
    const originalSizeNum = parseFloat(originalSize);
    const optimizedSizeNum = parseFloat(optimizedSize);
    
    if (optimizedSizeNum >= originalSizeNum) {
      console.log(`   ⏭️  Skipping - optimization would increase size`);
      return null;
    }
    
    // Create backup of original file
    const backupPath = inputPath + '.backup';
    fs.copyFileSync(inputPath, backupPath);
    console.log(`   📦 Created backup: ${path.basename(backupPath)}`);
    
    // Write optimized image
    fs.writeFileSync(outputPath, optimizedBuffer);
    
    const reduction = ((originalSizeNum - optimizedSizeNum) / originalSizeNum * 100).toFixed(1);
    
    console.log(`   ✅ Optimized: ${originalSize}MB → ${optimizedSize}MB (${reduction}% reduction)`);
    
    if (outputPath !== inputPath) {
      console.log(`   📝 New file: ${path.basename(outputPath)}`);
      console.log(`   💡 Update your code to use the new file extension`);
    }
    
    return {
      original: originalSizeNum,
      optimized: optimizedSizeNum,
      reduction: parseFloat(reduction),
      newPath: outputPath
    };
  } catch (error) {
    console.error(`   ❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

// Main function
async function main() {
  console.log('🚨 Starting critical image optimization...\n');
  console.log('This will optimize the largest images that are causing performance issues.\n');
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;
  const newFiles = [];
  
  for (const filePath of criticalFiles) {
    const result = await optimizeCriticalImage(filePath);
    if (result) {
      totalOriginalSize += result.original;
      totalOptimizedSize += result.optimized;
      processedCount++;
      
      if (result.newPath && result.newPath !== filePath) {
        newFiles.push({
          old: path.basename(filePath),
          new: path.basename(result.newPath)
        });
      }
    }
  }
  
  if (processedCount > 0) {
    const grandTotalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    
    console.log('\n🎉 Critical Optimization Summary:');
    console.log(`   Processed: ${processedCount}/${criticalFiles.length} files`);
    console.log(`   Total original size: ${totalOriginalSize.toFixed(2)}MB`);
    console.log(`   Total optimized size: ${totalOptimizedSize.toFixed(2)}MB`);
    console.log(`   Total space saved: ${(totalOriginalSize - totalOptimizedSize).toFixed(2)}MB`);
    console.log(`   Overall reduction: ${grandTotalReduction}%`);
    
    if (newFiles.length > 0) {
      console.log('\n📝 Files converted to WebP:');
      newFiles.forEach(file => {
        console.log(`   ${file.old} → ${file.new}`);
      });
      console.log('\n💡 Remember to update your code to use the new file extensions!');
    }
  } else {
    console.log('\n📊 No critical files needed optimization');
  }
  
  console.log('\n✨ Critical image optimization complete!');
  console.log('\n🔄 Next steps:');
  console.log('   1. Test your website to ensure it loads faster');
  console.log('   2. Update any code references to use new file extensions (if any)');
  console.log('   3. Consider removing the .backup files after testing');
}

// Run the script
main().catch(console.error); 