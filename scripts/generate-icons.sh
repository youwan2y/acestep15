#!/bin/bash

# PNG Icon Generator Script
# This script helps you create the required PNG icons for SEO

echo "🎨 Ace-Step 1.5 - PNG Icon Generator"
echo "======================================"
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick is not installed."
    echo ""
    echo "Please install ImageMagick first:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu: sudo apt-get install imagemagick"
    echo "  Windows: choco install imagemagick"
    echo ""
    echo "Alternatively, you can use online tools:"
    echo "  1. https://cloudconvert.com/svg-to-png"
    echo "  2. https://convertio.co/svg-png/"
    echo "  3. https://www.zamzar.com/convert/svg-to-png/"
    echo ""
    exit 1
fi

# Create icons directory
mkdir -p public/icons

echo "📐 Generating PNG icons from SVG..."
echo ""

# Generate 192x192 icon
echo "  ✓ Creating icon-192.png (192x192)..."
convert -background none -resize 192x192 public/icon.svg public/icon-192.png

# Generate 512x512 icon
echo "  ✓ Creating icon-512.png (512x512)..."
convert -background none -resize 512x512 public/icon.svg public/icon-512.png

# Generate Apple Touch Icon (180x180)
echo "  ✓ Creating apple-touch-icon.png (180x180)..."
convert -background none -resize 180x180 public/icon.svg public/apple-touch-icon.png

# Generate favicon.ico (32x32)
echo "  ✓ Creating favicon.ico (32x32)..."
convert -background none -resize 32x32 public/icon.svg public/favicon.ico

echo ""
echo "✅ Icon generation complete!"
echo ""
echo "Generated files:"
ls -lh public/*.png public/*.ico 2>/dev/null
echo ""
echo "Next steps:"
echo "1. Review the generated icons"
echo "2. Commit them to your repository"
echo "3. Deploy to production"
echo ""
