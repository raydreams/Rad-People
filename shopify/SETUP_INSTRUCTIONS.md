# RadPeople Shopify Theme - Setup Instructions

## ✅ Theme is Ready!

Your theme zip file is ready: **`RadPeople-Theme.zip`**

All pages now **automatically fetch content from Contentful API** - no manual page creation needed!

---

## 🚀 Step 1: Upload Theme

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **"Add theme" → "Upload zip file"**
3. Select **`RadPeople-Theme.zip`**
4. Wait for upload to complete
5. Click **"Publish"** to make it live

---

## 🎬 Step 2: Configure Videos

1. Go to **Theme Customizer** (click "Customize" on your theme)
2. In the left sidebar, find **"Homepage Videos"**
3. Add your video URLs:
   - **Desktop Video URL:** Get from Content → Files → `radpeople-landingPage.mp4` → Copy URL
   - **Mobile Video URL:** Get from Content → Files → `landingVideo-mobile.mp4` → Copy URL
4. Click **"Save"**

---

## 📡 Step 3: Contentful API (Already Configured!)

The theme is **already configured** with your Contentful credentials and will automatically fetch:
- ✅ Team members (About page)
- ✅ About content
- ✅ Events (Events page)
- ✅ Clients (Clients page)
- ✅ Gallery images (Gallery page)

**No manual setup needed!** The pages will automatically load content from Contentful.

### Optional: Update Contentful Credentials

If you need to change Contentful credentials:
1. Go to **Theme Customizer → Contentful CMS**
2. Update **Space ID** and **Access Token** if needed
3. Or edit `assets/contentful-api.js` directly

---

## 📄 Step 4: Create Pages (Optional - Content Auto-Loads!)

Even though content loads automatically, you still need to create the page routes:

1. Go to **Online Store → Pages → Add page**
2. Create these pages with **exact handles**:

### **Page 1: About**
- **Title:** About
- **Handle:** `about`
- **Template:** page (default)
- **Content:** Leave blank (content loads from Contentful)
- **Publish:** ✓

### **Page 2: Events**
- **Title:** Events  
- **Handle:** `events`
- **Template:** page (default)
- **Content:** Leave blank (content loads from Contentful)
- **Publish:** ✓

### **Page 3: Gallery**
- **Title:** Gallery
- **Handle:** `gallery`
- **Template:** page (default)
- **Content:** Leave blank (content loads from Contentful)
- **Publish:** ✓

### **Page 4: Clients**
- **Title:** Clients
- **Handle:** `clients`
- **Template:** page (default)
- **Content:** Leave blank (content loads from Contentful)
- **Publish:** ✓

---

## ✨ How It Works

### Automatic Content Loading

All pages automatically fetch content from Contentful when they load:

1. **About Page:**
   - Fetches team members from Contentful `talent` content type
   - Fetches about text from Contentful `about` content type
   - Shows profile previews on hover/click (exactly like React site)
   - Circular text shows contact info on hover

2. **Events Page:**
   - Fetches events from Contentful `events` content type
   - Categorizes into upcoming/past automatically
   - Shows video backgrounds (Wistia) or images
   - Desktop: 4-column grid with hover effects
   - Mobile: Auto-rotating carousel

3. **Gallery Page:**
   - Fetches images from Contentful `gallery` content type
   - Click navigation (left/right halves)
   - Arrow buttons
   - "VIEW ALL" overlay grid
   - Contact rectangle (blue box)

4. **Clients Page:**
   - Fetches clients from Contentful `clients` content type
   - Desktop: Slideshow + interactive table
   - Mobile: Vertical scroll with number navigation
   - Synchronized selection

### No Manual Content Entry Needed!

Since content loads from Contentful:
- ✅ Update content in Contentful → automatically appears on site
- ✅ No need to edit Shopify pages
- ✅ No need to manage metafields
- ✅ Works exactly like the React site

---

## 🛍️ Step 5: Set Up Products

1. Go to **Products → Add product**
2. Add your products with:
   - **Title:** Product name
   - **Images:** Upload product photos
   - **Variants:** Add sizes (if applicable)
   - **Price:** Set product price
   - **Description:** Add product details
3. Create a **Collection** (or use default "All")
4. Add products to the collection

---

## 🎉 That's It!

Your theme is now live with:
- ✅ Homepage with video background
- ✅ About page with team members (auto-loaded from Contentful)
- ✅ Events page with event calendar (auto-loaded from Contentful)
- ✅ Gallery page with image navigation (auto-loaded from Contentful)
- ✅ Clients page with slideshow/table (auto-loaded from Contentful)
- ✅ Product pages
- ✅ Cart functionality
- ✅ All interactions match the React site exactly

---

## 🔧 Troubleshooting

### Content Not Loading?

1. **Check Contentful API:**
   - Verify credentials in `assets/contentful-api.js`
   - Or set in Theme Customizer → Contentful CMS

2. **Check Browser Console:**
   - Open DevTools (F12)
   - Look for Contentful API errors
   - Check Network tab for API calls

3. **Check Contentful:**
   - Ensure content types exist: `talent`, `about`, `events`, `clients`, `gallery`
   - Ensure content is published
   - Check API access token permissions

### Pages Show "Loading..." Forever?

- Contentful API might be blocked or credentials incorrect
- Check browser console for errors
- Verify Contentful space ID and access token

---

## 📝 Notes

- **Contentful is the source of truth** - all content comes from there
- **No manual page content needed** - pages are just routes
- **All interactions work exactly like React site** - hover, click, navigation, etc.
- **Responsive design** - works on mobile and desktop
- **Auto-updates** - when you update Contentful, content updates on site (after cache expires, ~5 minutes)

---

## 🎊 You're All Set!

The theme automatically fetches and displays all content from Contentful. Just create the page routes and you're done!

