# Video Hosting Solution for Shopify Trial Accounts

Since Shopify trial accounts don't support video file uploads, here are alternative solutions:

## ✅ Solution 1: Google Drive (Recommended - Free & Easy)

### Step 1: Upload Videos to Google Drive

1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder or use an existing one
3. Upload these two files from `/Users/rehanmorani/Downloads/Rad-People/RadPeople-Shopify-Upload-Assets/videos/`:
   - `radpeople-landingPage.mp4` (64MB)
   - `landingVideo-mobile.mp4` (64MB)

### Step 2: Make Files Public & Get Direct Links

1. Right-click on `radpeople-landingPage.mp4`
2. Click **"Share"** → **"Get link"**
3. Set sharing to **"Anyone with the link"** → **"Viewer"**
4. Click **"Copy link"**
5. The link will look like: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
6. Convert it to direct download link:
   - Replace `/view?usp=sharing` with `/uc?export=download&id=FILE_ID`
   - Or use: `https://drive.google.com/uc?export=download&id=FILE_ID`
   - Extract the FILE_ID from the share link
   
// https://drive.google.com/file/d/1mQ57Hs5iXP_NRL0HcrmXjXuflFfFibBD/view?usp=sharing
// https://drive.google.com/uc?export=download&id=1mQ57Hs5iXP_NRL0HcrmXjXuflFfFibBD

// https://drive.google.com/file/d/10zuETrBp9DOxr3z48VbfneHPpUqG23pu/view?usp=sharing
// https://drive.google.com/uc?export=download&id=10zuETrBp9DOxr3z48VbfneHPpUqG23pu


### Step 3: Update Theme Template

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **"Actions" → "Edit code"** on your RadPeople theme
3. Navigate to: **Templates → index.liquid**
4. Find the video source tags (around lines 10-11)
5. Replace with your Google Drive links:

```liquid
<video class="styled-video" autoplay loop muted playsinline>
  <source src="https://drive.google.com/uc?export=download&id=10zuETrBp9DOxr3z48VbfneHPpUqG23pu" type="video/mp4" media="(min-width: 768px)">
  <source src="https://drive.google.com/uc?export=download&id=1mQ57Hs5iXP_NRL0HcrmXjXuflFfFibBD" type="video/mp4" media="(max-width: 767px)">
  Your browser does not support the video tag.
</video>
```

**Note**: Google Drive has some limitations (download prompts, bandwidth limits). For better performance, see Solution 2.

---

## ✅ Solution 2: Use a CDN or Video Hosting Service

### Option A: Cloudflare R2 (Free tier available)
- Upload videos to Cloudflare R2
- Get public URLs
- Update theme template with URLs

### Option B: AWS S3 (Pay as you go, very cheap)
- Upload videos to S3 bucket
- Make bucket public
- Get public URLs
- Update theme template

### Option C: Vimeo/YouTube (Free but with limitations)
- Upload to Vimeo or YouTube (unlisted)
- Get embed URLs
- Requires using iframe instead of video tag

---

## ✅ Solution 3: Temporary Workaround - Remove Videos

If you just want to test the theme without videos:

1. Go to **Shopify Admin → Online Store → Themes → Edit code**
2. Navigate to: **Templates → index.liquid**
3. Comment out or remove the video section temporarily:

```liquid
{% comment %}
<div class="home-container">
  <div class="video-wrapper">
    <video class="styled-video" autoplay loop muted playsinline>
      <source src="{{ 'radpeople-landingPage.mp4' | asset_url }}" type="video/mp4" media="(min-width: 768px)">
      <source src="{{ 'landingVideo-mobile.mp4' | asset_url }}" type="video/mp4" media="(max-width: 767px)">
      Your browser does not support the video tag.
    </video>
  </div>
</div>
{% endcomment %}

<div class="home-container" style="min-height: 100vh; background-color: #1404FB; display: flex; align-items: center; justify-content: center;">
  <h1 style="font-family: 'NF Ultra', sans-serif; color: white; font-size: 4rem;">RADPEOPLE</h1>
</div>
```

This will show a blue background with "RADPEOPLE" text instead of the video.

---

## 📝 Quick Google Drive Setup Guide

### Getting Direct Download Links:

1. **Upload to Google Drive**
2. **Share file** → Set to "Anyone with the link"
3. **Get share link**: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
4. **Extract FILE_ID** (the long string between `/d/` and `/view`)
5. **Create direct link**: `https://drive.google.com/uc?export=download&id=FILE_ID`

**Example:**
- Share link: `https://drive.google.com/file/d/1abc123xyz456def789/view?usp=sharing`
- Direct link: `https://drive.google.com/uc?export=download&id=1abc123xyz456def789`

### Better Alternative - Use Google Drive Direct Link Generator

You can use online tools to convert Google Drive share links to direct download links:
- Search for "Google Drive direct link generator"
- Paste your share link
- Get the direct download link

---

## 🎯 Recommended Approach

1. **For Testing**: Use Solution 3 (temporary workaround) to get the theme working
2. **For Production**: Use Solution 1 (Google Drive) or Solution 2 (proper CDN)
3. **Best Long-term**: Upgrade Shopify plan or use a proper CDN service

---

## ⚠️ Important Notes

- **Google Drive**: May have bandwidth limits and download prompts (not ideal for production)
- **CDN Services**: Better performance but may have costs
- **Trial Account**: Consider upgrading to a paid plan for full functionality
- **Video Size**: 64MB videos may take time to load - consider compressing if needed

