# RadPeople Shopify Theme - Setup Checklist

## ✅ Step 1: Theme Uploaded
- [x] Theme zip file uploaded to Shopify

## 📋 Step 2: Activate the Theme

1. Go to **Shopify Admin → Online Store → Themes**
2. Find "RadPeople" in your themes list
3. Click **"Actions" → "Publish"** to make it your live theme
   - Or click **"Customize"** to preview first

---

## 🎬 Step 3: Upload Videos (Required for Homepage)

1. Go to **Shopify Admin → Content → Files**
2. Click **"Upload files"**
3. Navigate to: `/Users/rehanmorani/Downloads/Rad-People/RadPeople-Shopify-Upload-Assets/videos/`
4. Upload these two files:
   - `radpeople-landingPage.mp4` (64MB) - Desktop video
   - `landingVideo-mobile.mp4` (64MB) - Mobile video
5. Wait for uploads to complete
6. Click on each file to copy its URL (will look like: `https://cdn.shopify.com/s/files/1/XXXX/YYYY/file.mp4`)

### Update Video URLs in Theme

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **"Actions" → "Edit code"** on your RadPeople theme
3. Navigate to: **Templates → index.liquid**
4. Find these lines (around lines 10-11):
   ```liquid
   <source src="{{ 'radpeople-landingPage.mp4' | asset_url }}" type="video/mp4" media="(min-width: 768px)">
   <source src="{{ 'landingVideo-mobile.mp4' | asset_url }}" type="video/mp4" media="(max-width: 767px)">
   ```
5. Replace with the URLs you copied:
   ```liquid
   <source src="https://cdn.shopify.com/s/files/1/[YOUR_FILE_ID]/radpeople-landingPage.mp4" type="video/mp4" media="(min-width: 768px)">
   <source src="https://cdn.shopify.com/s/files/1/[YOUR_FILE_ID]/landingVideo-mobile.mp4" type="video/mp4" media="(max-width: 767px)">
   ```
6. Click **"Save"**

---

## 📄 Step 4: Create Required Pages

1. Go to **Shopify Admin → Online Store → Pages**
2. Create the following pages with these exact **handles** (URL slugs):

### About Page
- **Title**: About
- **Handle**: `about`
- **Content**: Add your about content here (or use metafields)

### Gallery Page
- **Title**: Gallery
- **Handle**: `gallery`
- **Content**: Add gallery content here

### Events Page
- **Title**: Events
- **Handle**: `events`
- **Content**: Add events content here

### Clients Page
- **Title**: Clients
- **Handle**: `clients`
- **Content**: Add clients content here

**Note**: The handle (URL slug) must match exactly: `about`, `gallery`, `events`, `clients`

---

## 🛍️ Step 5: Set Up Products

### Add Products
1. Go to **Shopify Admin → Products**
2. Add your products
3. For each product:
   - Add images
   - Create variants for sizes (if applicable)
   - Add product description
   - Set price

### Create Metafields (Optional but Recommended)

1. Go to **Shopify Admin → Settings → Custom data → Products**
2. Create these metafields:

#### Color Metafield
- **Name**: Color
- **Namespace and key**: `custom.color`
- **Type**: Single line text

#### Shipping Weeks Metafield
- **Name**: Shipping Weeks
- **Namespace and key**: `custom.shipping_weeks`
- **Type**: Single line text

#### Size and Fit Metafield
- **Name**: Size and Fit
- **Namespace and key**: `custom.size_and_fit`
- **Type**: Multi-line text

#### Care Metafield
- **Name**: Care
- **Namespace and key**: `custom.care`
- **Type**: Multi-line text

3. Go back to **Products** and fill in these metafields for each product

---

## 🎨 Step 6: Create Collections

1. Go to **Shopify Admin → Products → Collections**
2. Create collections for your products
3. Add products to collections
4. The collection template will automatically display products in a grid

---

## 🔍 Step 7: Test Your Theme

1. Visit your storefront
2. Test navigation:
   - Homepage (should show video background)
   - About, Gallery, Events, Clients pages
   - Shop/Collections
   - Product pages
   - Cart drawer (click cart icon)

3. Check mobile responsiveness
4. Test adding products to cart
5. Verify all links work

---

## ⚙️ Step 8: Customize Settings (Optional)

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **"Customize"** on your RadPeople theme
3. Adjust any theme settings if available

---

## 📝 Additional Notes

- **Videos**: If videos don't appear on homepage, check that URLs are correct in `templates/index.liquid`
- **Pages**: Make sure page handles match exactly (lowercase, no spaces)
- **Products**: Product images should be uploaded to Shopify products, not theme assets
- **Fonts**: Custom fonts are already included in the theme
- **Cart**: Uses Shopify's native cart system (no external APIs needed)

---

## 🆘 Troubleshooting

### Videos not showing?
- Check that video URLs are correct in `templates/index.liquid`
- Verify videos are uploaded to Shopify Files
- Check browser console for errors

### Pages not working?
- Verify page handles match exactly: `about`, `gallery`, `events`, `clients`
- Check that pages are published

### Products not showing?
- Ensure products are added to collections
- Check that products have images
- Verify variants are set up correctly

### Cart not working?
- Cart uses Shopify's native system - should work automatically
- Check browser console for JavaScript errors

---

## ✅ You're Done!

Once all steps are complete, your RadPeople theme should be fully functional!

