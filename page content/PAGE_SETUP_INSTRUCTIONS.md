# Page Content Setup Instructions

## 📄 How to Create Pages in Shopify

Follow these steps to create the required pages for your RadPeople theme:

---

## Step 1: Create Pages

Go to **Shopify Admin → Online Store → Pages → Add page**

Create these pages with **EXACT** handles:

### Page 1: About
- **Title:** About
- **Handle:** `about` (must be lowercase, exactly "about")
- **Template:** page (default)
- **Content:** Leave blank (content loads automatically from Contentful)
- **Visibility:** Visible
- Click **Save**

### Page 2: Events
- **Title:** Events
- **Handle:** `events` (must be lowercase, exactly "events")
- **Template:** page (default)
- **Content:** Leave blank (content loads automatically from Contentful)
- **Visibility:** Visible
- Click **Save**

### Page 3: Gallery
- **Title:** Gallery
- **Handle:** `gallery` (must be lowercase, exactly "gallery")
- **Template:** page (default)
- **Content:** Leave blank (content loads automatically from Contentful)
- **Visibility:** Visible
- Click **Save**

### Page 4: Clients
- **Title:** Clients
- **Handle:** `clients` (must be lowercase, exactly "clients")
- **Template:** page (default)
- **Content:** Leave blank (content loads automatically from Contentful)
- **Visibility:** Visible
- Click **Save**

---

## Step 2: Create Navigation Menu (Optional)

If pages don't appear in navigation automatically:

1. Go to **Online Store → Navigation**
2. Click **Main menu** (or create a new menu)
3. Add menu items:
   - **ABOUT** → Link to page: About
   - **GALLERY** → Link to page: Gallery
   - **SHOP** → Link to collections: All Products (or your main collection)
   - **EVENTS** → Link to page: Events
   - **CLIENTS** → Link to page: Clients
4. Click **Save**

---

## Step 3: Create Collection for Shop

1. Go to **Products → Collections → Create collection**
2. **Title:** All Products (or "Shop")
3. **Handle:** Leave as default or set to `all`
4. **Collection type:** Manual or Automated
5. Add products to the collection
6. Click **Save**

---

## Step 4: Configure Videos

1. Go to **Theme Customizer** (click "Customize" on your theme)
2. In left sidebar, find **"Homepage Videos"**
3. Get video URLs:
   - Go to **Content → Files**
   - Find `radpeople-landingPage.mp4` → Click it → Copy the URL
   - Find `landingVideo-mobile.mp4` → Click it → Copy the URL
4. Paste URLs into theme settings:
   - **Desktop Video URL:** Paste desktop video URL
   - **Mobile Video URL:** Paste mobile video URL
5. Click **Save**

---

## ✅ Verification Checklist

- [ ] About page created with handle `about`
- [ ] Events page created with handle `events`
- [ ] Gallery page created with handle `gallery`
- [ ] Clients page created with handle `clients`
- [ ] Collection created for shop
- [ ] Products added to collection
- [ ] Videos configured in theme settings
- [ ] Navigation menu set up (optional)

---

## 🐛 Troubleshooting

### Pages show blank blue screen?
- Check that page handles are **exactly** lowercase: `about`, `events`, `gallery`, `clients`
- Make sure pages are **published** (not draft)
- Clear browser cache

### Videos not showing?
- Check video URLs in theme settings are correct
- Make sure videos are uploaded to **Content → Files** (not Assets)
- URLs should start with `https://cdn.shopify.com/s/files/...`

### Shop page shows nothing?
- Create a collection first
- Add products to the collection
- Make sure collection is published
- Check that collection template is set to `collection` (default)

### Navigation links don't work?
- Verify pages exist with correct handles
- Check that pages are published
- Clear browser cache

---

## 📝 Notes

- **Page handles are case-sensitive!** Use lowercase: `about`, not `About`
- Content loads automatically from Contentful - no need to add content manually
- If Contentful API isn't working, pages will show "Loading..." - check browser console for errors

---

## 🎉 You're Done!

Once all pages are created, your theme should work perfectly!

