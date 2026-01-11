# Video Setup Instructions

The theme zip file does NOT include video files due to size limitations (theme must be < 50MB).

## Video Files to Upload Separately

You need to upload the following video files to Shopify's file manager:

1. **Homepage Video (Desktop)**: `radpeople-landingPage.mp4` (64MB)
   - Upload to: Shopify Admin → Content → Files
   - Get the URL and update `templates/index.liquid`

2. **Homepage Video (Mobile)**: `landingVideo-mobile.mp4` (64MB)
   - Upload to: Shopify Admin → Content → Files
   - Get the URL and update `templates/index.liquid`

## Steps to Add Videos

1. Go to Shopify Admin → Content → Files
2. Upload the video files
3. Copy the file URLs
4. Edit `templates/index.liquid` and replace the video asset URLs:

```liquid
{% comment %} Replace these lines in templates/index.liquid {% endcomment %}
<source src="{{ 'radpeople-landingPage.mp4' | asset_url }}" type="video/mp4" media="(min-width: 768px)">
<source src="{{ 'landingVideo-mobile.mp4' | asset_url }}" type="video/mp4" media="(max-width: 767px)">
```

With:

```liquid
{% comment %} Use the file URLs from Shopify's file manager {% endcomment %}
<source src="https://cdn.shopify.com/s/files/1/[YOUR_FILE_ID]/radpeople-landingPage.mp4" type="video/mp4" media="(min-width: 768px)">
<source src="https://cdn.shopify.com/s/files/1/[YOUR_FILE_ID]/landingVideo-mobile.mp4" type="video/mp4" media="(max-width: 767px)">
```

Or use Shopify's file_url filter if you add them as theme settings.

## Alternative: Use Theme Settings

You can also add video URLs as theme settings in `config/settings_schema.json` and reference them in the template.

## Video File Locations (Original Source)

If you need the video files, they are located in:
- `/Users/rehanmorani/Downloads/Rad-People/RadPeople/src/assets/`
- Files: `radpeople-landingPage.mp4`, `landingVideo-mobile.mp4`

