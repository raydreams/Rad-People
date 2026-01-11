# Fix Theme Upload Error

## Error: "Theme cannot be previewed because it's missing one of these required files: layout/theme.liquid, config/settings_schema.json"

## ✅ Solution: Re-create Zip File Correctly

The zip file has been recreated with the correct structure. Follow these steps:

### Step 1: Delete Old Theme from Shopify

1. Go to **Shopify Admin → Online Store → Themes**
2. Find the RadPeople theme you uploaded
3. Click **"Actions" → "Delete"** to remove it

### Step 2: Use the New Zip File

I've created a fresh zip file: `RadPeople-Shopify-Theme.zip`

**Location**: `/Users/rehanmorani/Downloads/Rad-People/RadPeople-Shopify-Theme.zip`

### Step 3: Verify the Zip Structure

The zip file should have this structure when extracted:
```
layout/
  └── theme.liquid          ✅ Required file
config/
  └── settings_schema.json  ✅ Required file
templates/
snippets/
sections/
assets/
...
```

**NOT:**
```
RadPeople-Shopify/
  └── layout/
      └── theme.liquid      ❌ Wrong - nested in folder
```

### Step 4: Re-upload to Shopify

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **"Upload theme"**
3. Select: `RadPeople-Shopify-Theme.zip`
4. Wait for upload to complete
5. Click **"Actions" → "Publish"** to activate

---

## 🔍 Verification

The new zip file has been verified to contain:
- ✅ `layout/theme.liquid` at the root
- ✅ `config/settings_schema.json` at the root
- ✅ All other required theme files
- ✅ No video files (excluded to keep size under 50MB)

---

## ⚠️ Important Notes

1. **Always zip from INSIDE the theme folder** - Don't zip the parent directory
2. **Delete old themes** before re-uploading to avoid conflicts
3. **Use the pre-created zip** - It has the correct structure
4. **File size**: The zip is ~6.2MB (videos excluded)

---

## 🆘 If Still Having Issues

If you still get the error after re-uploading:

1. **Check the zip file** - Make sure you're using `RadPeople-Shopify-Theme.zip` (6.2MB)
2. **Verify structure** - Run this command to check:
   ```bash
   cd /Users/rehanmorani/Downloads/Rad-People
   zipinfo -1 RadPeople-Shopify-Theme.zip | grep -E "^layout/theme.liquid$|^config/settings_schema.json$"
   ```
   Should output:
   ```
   layout/theme.liquid
   config/settings_schema.json
   ```

3. **Try manual zip creation**:
   ```bash
   cd /Users/rehanmorani/Downloads/Rad-People/RadPeople-Shopify
   zip -r ../RadPeople-Shopify-Theme.zip . -x "*.mp4" "assets/videos/*" "assets/*.mp4"
   ```

4. **Contact Shopify Support** if the issue persists

