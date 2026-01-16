# Video Setup Instructions

## Setting Up Homepage Videos

Since you've uploaded the videos to Shopify's Content Files, follow these steps to configure them:

### Step 1: Get Video URLs
1. Go to Shopify Admin → Content → Files
2. Find your uploaded videos:
   - `radpeople-landingPage.mp4` (desktop video)
   - `landingVideo-mobile.mp4` (mobile video)
3. Click on each file to open it
4. Copy the URL from the browser address bar or use the "Copy link" option if available
5. The URL will look something like: `https://cdn.shopify.com/s/files/1/xxxx/xxxx/files/radpeople-landingPage.mp4`

### Step 2: Configure Theme Settings
1. Go to Shopify Admin → Online Store → Themes
2. Click "Customize" on your RadPeople theme
3. In the theme editor, look for "Homepage Videos" section in the left sidebar
4. Paste the desktop video URL into "Desktop Video URL" field
5. Paste the mobile video URL into "Mobile Video URL" field
6. Click "Save" in the top right

### Alternative: Using Assets Folder
If you prefer to use the assets folder instead:
1. Zip the theme files
2. Extract locally
3. Add videos to `assets/` folder:
   - `assets/radpeople-landingPage.mp4`
   - `assets/landingVideo-mobile.mp4`
4. Re-zip the theme
5. Upload to Shopify

The theme will automatically fall back to asset URLs if settings are not configured.

## Troubleshooting

- **Videos not showing**: Make sure the URLs are complete and accessible
- **Wrong video showing**: Clear browser cache and check that the correct URLs are in theme settings
- **Videos slow to load**: Consider using Shopify's CDN or optimizing video file sizes

