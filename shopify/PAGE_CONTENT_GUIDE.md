# Page Content Guide

This guide explains how to add content to your Shopify pages.

## Method 1: Using Shopify Page Editor (Recommended)

### Steps:
1. Go to **Shopify Admin → Online Store → Pages**
2. Create or edit the following pages with these exact handles:
   - `about` - About page
   - `events` - Events page  
   - `gallery` - Gallery page
   - `clients` - Clients page

3. For each page:
   - Add your content in the page editor
   - The content will automatically display on the page
   - You can use rich text, images, etc.

### Example for About Page:
- In the page editor, add your "About Us" text
- It will appear in the white info box on the left side
- Team members can be added via metafields (see Method 2)

---

## Method 2: Using Shopify Metafields (Advanced)

### For About Page - Team Members:

1. **Set up Team Member Metafields:**
   - Go to **Settings → Custom data → Products/Pages**
   - Create a metafield definition:
     - Name: `team_member`
     - Type: `List of files` or `List of products` (for images/bios)
     - Or create individual metafields for each team member

2. **Alternative: Use Page Metafields:**
   - On the About page, add custom metafields:
     - `team_member_1_name`
     - `team_member_1_bio`
     - `team_member_1_image`
     - Repeat for each team member

### For Events Page:

1. Create a collection called "Events"
2. Add products for each event with:
   - Event name as product title
   - Date in description or metafield
   - Location in description or metafield
   - Featured image as event image
3. The page will automatically display events from the collection

Or create metafields on the Events page:
- `upcoming_event_1_name`
- `upcoming_event_1_date`
- `upcoming_event_1_location`
- `upcoming_event_1_description`

### For Gallery Page:

1. **Option 1:** Upload images to the Gallery page content
2. **Option 2:** Create a collection called "Gallery"
3. **Option 3:** Use metafields:
   - `gallery_image_1` through `gallery_image_20`
   - Each as a file metafield

### For Clients Page:

1. Create metafields on the Clients page:
   - `client_1_name`
   - `client_1_description`
   - `client_1_company_type`
   - `client_1_year`
   - `client_1_status` (Complete/In Progress)
   - Repeat for each client

2. Or create a collection called "Clients" and add products with:
   - Client name as title
   - Description in product description
   - Year and status in metafields

---

## Method 3: Edit Liquid Files Directly (Not Recommended)

You can edit the snippet files directly:
- `snippets/page-about.liquid`
- `snippets/page-events.liquid`
- `snippets/page-gallery.liquid`
- `snippets/page-clients.liquid`

⚠️ **Warning:** This requires code knowledge and any changes will be lost if you update the theme.

---

## Quick Start - Default Content

The theme already includes default placeholder content for all pages, so your site will look good immediately. You can then customize:

1. **About Page:** Edit the page content in Shopify admin
2. **Events:** Add events as products in a collection or use page content
3. **Gallery:** Upload images to page content or create a gallery collection
4. **Clients:** Add client information via page metafields or a clients collection

---

## Need Help?

The theme is designed to work out of the box with default content. Start with the page editor (Method 1) - it's the easiest way to add your content!

