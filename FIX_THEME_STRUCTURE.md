# Fix Theme Structure Issue

## Problem: "Role can't be set to main: missing required file layout/theme.liquid"

This error means Shopify can't find the `layout/theme.liquid` file at the correct location in the zip.

## ✅ Solution: Re-create Zip from Inside the Theme Folder

The zip must be created from **INSIDE** the `RadPeople-Shopify` folder, not from the parent directory.

### Method 1: Use Terminal (Recommended)

```bash
cd /Users/rehanmorani/Downloads/Rad-People/RadPeople-Shopify
zip -r ../RadPeople-Shopify-Theme.zip . -x "*.mp4" "assets/videos/*" "assets/*.mp4" "*/*.mp4"
cd ..
```

This creates a zip where `layout/theme.liquid` is at the root, not nested in a folder.

### Method 2: Manual Check

Verify the zip structure:

```bash
zipinfo -1 RadPeople-Shopify-Theme.zip | head -5
```

Should show:
```
layout/theme.liquid
templates/index.liquid
snippets/navbar.liquid
...
```

**NOT:**
```
RadPeople-Shopify/layout/theme.liquid
RadPeople-Shopify/templates/index.liquid
...
```

### Method 3: Using Finder (macOS)

1. Open **Terminal**
2. Navigate to the theme folder:
   ```bash
   cd /Users/rehanmorani/Downloads/Rad-People/RadPeople-Shopify
   ```
3. Create the zip:
   ```bash
   zip -r ../RadPeople-Shopify-Theme.zip . -x "*.mp4" "assets/videos/*" "assets/*.mp4"
   ```
4. The zip will be created in the parent directory

---

## ✅ Already Fixed Zip

I've already recreated the zip file correctly. The file `RadPeople-Shopify-Theme.zip` should now have the correct structure.

### Verify It's Correct:

Run this command:
```bash
cd /Users/rehanmorani/Downloads/Rad-People
zipinfo -1 RadPeople-Shopify-Theme.zip | grep "^layout/theme.liquid"
```

If it shows `layout/theme.liquid`, the zip is correct!

### If It Still Shows Error:

1. Delete the old theme from Shopify (if uploaded)
2. Download the new zip file: `RadPeople-Shopify-Theme.zip`
3. Re-upload to Shopify
4. Try publishing again

---

## 🔍 Quick Verification Commands

Check zip structure:
```bash
zipinfo -1 RadPeople-Shopify-Theme.zip | head -10
```

Check for theme.liquid:
```bash
zipinfo -1 RadPeople-Shopify-Theme.zip | grep "theme.liquid"
```

Should output: `layout/theme.liquid`

Test zip integrity:
```bash
unzip -t RadPeople-Shopify-Theme.zip
```

Should say: "No errors detected in compressed data"

