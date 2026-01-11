# How to Create the Shopify Theme Zip File

## ⚠️ Important: Do NOT manually zip the entire folder

The `RadPeople-Shopify` folder contains large video files (~239MB) that will make your zip file exceed the 50MB limit.

## ✅ Correct Method

### Option 1: Use the Pre-made Zip File (Recommended)

Use the pre-created zip file:
- **File**: `RadPeople-Shopify-Theme.zip` (6.2MB)
- **Location**: `/Users/rehanmorani/Downloads/Rad-People/RadPeople-Shopify-Theme.zip`
- This file already excludes videos and is ready to upload

### Option 2: Create Zip from Inside the Folder

If you need to recreate the zip file:

```bash
cd RadPeople-Shopify
zip -r ../RadPeople-Shopify-Theme.zip . -x "*.mp4" "assets/videos/*" "assets/*.mp4" "*/*.mp4"
cd ..
```

This creates the zip from **inside** the theme folder, ensuring the correct file structure.

### Option 3: Use the Command Line (Excluding Videos)

From the parent directory:

```bash
cd /Users/rehanmorani/Downloads/Rad-People
zip -r RadPeople-Shopify-Theme.zip RadPeople-Shopify -x "*.mp4" "RadPeople-Shopify/assets/videos/*" "RadPeople-Shopify/assets/*.mp4" "*/*.mp4"
```

## ❌ What NOT to Do

**DO NOT:**
1. Select the entire `RadPeople-Shopify` folder and compress it manually
2. Include `.mp4` video files in the zip
3. Zip from the parent directory without excluding videos

## File Structure

The zip file should have this structure when unzipped:

```
RadPeople-Shopify/
├── layout/
│   └── theme.liquid          ← Must be at this path
├── templates/
│   ├── index.liquid
│   ├── collection.liquid
│   ├── product.liquid
│   └── page.liquid
├── snippets/
├── sections/
├── assets/
├── config/
└── ...
```

**NOT:**
```
RadPeople-Shopify-Theme.zip
└── RadPeople-Shopify/
    └── layout/
        └── theme.liquid
```

When Shopify unzips the file, it expects `layout/theme.liquid` to be at the root of the zip, not nested inside a folder.

## Verification

After creating the zip, verify the structure:

```bash
zipinfo -1 RadPeople-Shopify-Theme.zip | head -10
```

You should see:
```
layout/theme.liquid
templates/index.liquid
snippets/navbar.liquid
...
```

NOT:
```
RadPeople-Shopify/layout/theme.liquid
RadPeople-Shopify/templates/index.liquid
...
```

## File Size

- **Correct zip**: ~6.2MB (without videos)
- **Incorrect zip**: ~500MB (with videos - will be rejected)

## Upload Videos Separately

Videos should be uploaded separately to:
- **Location**: `RadPeople-Shopify-Upload-Assets/videos/`
- **Upload via**: Shopify Admin → Content → Files
- **Then update**: `templates/index.liquid` with the file URLs

