# Page Creation Guide - IMPORTANT!

## ⚠️ Pages Must Be Created in Shopify Admin

The theme templates are ready, but **you must create the pages in Shopify Admin** for them to work. Pages like `/about`, `/gallery`, `/events`, and `/clients` won't exist until you create them.

---

## 📋 Step-by-Step: Create Pages

### 1. Go to Shopify Admin
- Navigate to **Online Store → Pages**

### 2. Create Each Page

Click **"Add page"** and create these pages with **EXACT** handles:

#### **Page 1: About**
- **Title:** About
- **Handle:** `about` (must be lowercase, exactly "about")
- **Template:** page (default)
- **Content:** Leave blank (content loads automatically from Contentful)
- **Visibility:** Visible
- Click **Save**

#### **Page 2: Events**
- **Title:** Events
- **Handle:** `events` (must be lowercase, exactly "events")
- **Template:** page (default)
- **Content:** Leave blank (content loads automatically from Contentful)
- **Visibility:** Visible
- Click **Save**

#### **Page 3: Gallery**
- **Title:** Gallery
- **Handle:** `gallery` (must be lowercase, exactly "gallery")
- **Template:** page (default)
- **Content:** Leave blank (content loads automatically from Contentful)
- **Visibility:** Visible
- Click **Save**

#### **Page 4: Clients**
- **Title:** Clients
- **Handle:** `clients` (must be lowercase, exactly "clients")
- **Template:** page (default)
- **Content:** Leave blank (content loads automatically from Contentful)
- **Visibility:** Visible
- Click **Save**

---

## ✅ Verification

After creating the pages:

1. Visit your storefront
2. Click the navigation links (ABOUT, GALLERY, EVENTS, CLIENTS)
3. Pages should load and display content from Contentful

---

## 🐛 Troubleshooting

### Pages show 404?
- **Check the handle** - it must be exactly: `about`, `events`, `gallery`, `clients` (lowercase, no spaces)
- **Check visibility** - pages must be set to "Visible" (not draft)
- **Clear browser cache** - sometimes old 404 pages are cached

### Pages show blank/loading?
- Content is loading from Contentful API
- Check browser console (F12) for errors
- Verify Contentful credentials in theme settings
- Content should appear within a few seconds

### Can't find "Handle" field?
- In Shopify Admin, when editing a page, scroll down
- The handle is usually below the title field
- Or click "Edit website SEO" to see/edit the handle

---

## 📝 Important Notes

- **Handles are case-sensitive!** Use lowercase: `about`, not `About`
- **Pages are just routes** - content loads from Contentful automatically
- **No content needed in page editor** - leave it blank, Contentful provides the content
- **Pages must be published** - set visibility to "Visible"

---

## 🎉 Once Created

After creating all 4 pages with the correct handles, your navigation will work perfectly and content will load automatically from Contentful!

