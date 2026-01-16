# Collection Setup Instructions

## How to Set Up Your Shop Collection

To display your products on the SHOP page, you need to create a collection and add your products to it.

### Step 1: Create a Collection

1. Go to **Shopify Admin → Products → Collections**
2. Click **"Create collection"**
3. Fill in the details:
   - **Title:** All Products (or "Shop")
   - **Handle:** `all` (or `shop` - this is the URL part)
   - **Collection type:** 
     - **Automated:** Automatically includes products based on conditions
     - **Manual:** You manually add products
4. Click **"Save"**

### Step 2: Add Products to Collection

#### If using Automated Collection:
1. Set up conditions (e.g., "Product price is greater than $0")
2. This will automatically include all products

#### If using Manual Collection:
1. Click on your collection
2. Click **"Add products"**
3. Select all the products you want to display
4. Click **"Add"**

### Step 3: Configure Theme Settings

1. Go to **Online Store → Themes → Customize**
2. In the left sidebar, find **"Shop Collection"**
3. Enter the collection handle:
   - If your collection handle is `all`, enter: `all`
   - If your collection handle is `shop`, enter: `shop`
   - If your collection handle is something else, enter that
4. Click **"Save"**

### Step 4: Verify

1. Visit your storefront
2. Click **"SHOP"** in the navigation
3. You should see all your products displayed in a grid

---

## Troubleshooting

### Products not showing?
- Make sure the collection is **published** (not draft)
- Make sure products are **published** and **available**
- Check that the collection handle in theme settings matches your collection's handle
- Verify products are actually added to the collection

### Collection handle not working?
- Go to your collection in Shopify Admin
- Check the URL - it will be `/collections/YOUR-HANDLE`
- Use exactly what comes after `/collections/` as the handle

### Want to use a different collection?
- Create a new collection with a different handle
- Update the "Shop Collection Handle" in theme settings
- Make sure to add products to the new collection

---

## Quick Setup (Recommended)

1. Create a collection called **"All Products"** with handle **`all`**
2. Set it as **Automated** with condition: **"Product price is greater than $0"**
3. In theme settings, set **Shop Collection Handle** to: **`all`**
4. Done! All your products will automatically appear in the shop.

