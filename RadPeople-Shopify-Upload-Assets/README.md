# RadPeople Shopify Theme - Additional Assets to Upload

This directory contains assets that need to be uploaded separately to Shopify (outside of the theme zip file).

## Videos to Upload

### Required Videos

1. **radpeople-landingPage.mp4** (64MB)
   - Desktop homepage video background
   - Upload to: Shopify Admin → Content → Files
   - Update in: `templates/index.liquid`

2. **landingVideo-mobile.mp4** (64MB)
   - Mobile homepage video background
   - Upload to: Shopify Admin → Content → Files
   - Update in: `templates/index.liquid`

### Optional Videos

If you need these videos elsewhere in your site:

- `nightvision.mp4` (27MB)
- `rad-people-landing-video.mp4` (64MB)
- `vintage_video.mp4` (19MB)

## Upload Instructions

### Step 1: Upload Videos to Shopify

1. Go to Shopify Admin → **Content** → **Files**
2. Click **Upload files**
3. Upload the video files from the `videos/` directory
4. Wait for upload to complete
5. Copy the file URLs (they'll look like: `https://cdn.shopify.com/s/files/1/XXXX/YYYY/file.mp4`)

### Step 2: Update Theme Templates

After uploading, update `templates/index.liquid`:

**Before:**
```liquid
<source src="{{ 'radpeople-landingPage.mp4' | asset_url }}" type="video/mp4" media="(min-width: 768px)">
<source src="{{ 'landingVideo-mobile.mp4' | asset_url }}" type="video/mp4" media="(max-width: 767px)">
```

**After:**
```liquid
<source src="https://cdn.shopify.com/s/files/1/[YOUR_FILE_ID]/radpeople-landingPage.mp4" type="video/mp4" media="(min-width: 768px)">
<source src="https://cdn.shopify.com/s/files/1/[YOUR_FILE_ID]/landingVideo-mobile.mp4" type="video/mp4" media="(max-width: 767px)">
```

Replace `[YOUR_FILE_ID]` with the actual file ID from Shopify's file URLs.

### Alternative: Use Theme Settings

You can also add video URLs as theme settings in `config/settings_schema.json`:

1. Add settings to `settings_schema.json` for video URLs
2. Reference them in templates using `settings.video_url_desktop` and `settings.video_url_mobile`

## Notes

- Videos are NOT included in the theme zip file due to file size limitations (theme must be < 50MB)
- Video files total ~239MB, which exceeds the theme upload limit
- Upload videos after the theme is installed
- Video URLs can be updated in the theme editor without re-uploading the entire theme

## File Locations

- **Theme Zip**: `RadPeople-Shopify-Theme.zip` (upload this first)
- **Videos**: This directory (`RadPeople-Shopify-Upload-Assets/videos/`) - upload separately

