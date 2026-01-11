# RadPeople Shopify Theme

This is the Shopify theme version of the RadPeople website, converted from the original TypeScript/React application.

## Theme Structure

```
RadPeople-Shopify/
├── assets/          # CSS, JavaScript, fonts, images, videos
├── config/          # Theme configuration
├── layout/          # Theme layout files
├── locales/         # Translation files (optional)
├── sections/        # Reusable sections
├── snippets/        # Reusable components
└── templates/       # Page templates
```

## Key Files

### Layouts
- `layout/theme.liquid` - Main theme layout

### Templates
- `templates/index.liquid` - Homepage
- `templates/collection.liquid` - Product collection page
- `templates/product.liquid` - Product detail page
- `templates/page.liquid` - Static pages (About, Events, Gallery, Clients)

### Snippets
- `snippets/navbar.liquid` - Navigation bar
- `snippets/footer.liquid` - Footer
- `snippets/cart-drawer.liquid` - Shopping cart drawer
- `snippets/intro-animation.liquid` - Homepage intro animation
- `snippets/details-dropdown.liquid` - Product details dropdown
- `snippets/page-about.liquid` - About page content
- `snippets/page-events.liquid` - Events page content
- `snippets/page-gallery.liquid` - Gallery page content
- `snippets/page-clients.liquid` - Clients page content

### Assets
- `assets/theme.css` - Global styles and fonts
- `assets/navbar.css` - Navigation styles
- `assets/footer.css` - Footer styles
- `assets/home.css` - Homepage styles
- `assets/products.css` - Product page styles
- `assets/cart.css` - Cart drawer styles

## Setup Instructions

1. **Upload Theme to Shopify**
   - Zip the theme directory
   - Upload via Shopify Admin → Online Store → Themes → Upload theme

2. **Create Required Pages**
   - Go to Online Store → Pages
   - Create pages with handles: `about`, `events`, `gallery`, `clients`
   - Add content as needed

3. **Setup Products**
   - Add products with variants (sizes)
   - Set up metafields for:
     - `custom.color` - Product color
     - `custom.shipping_weeks` - Shipping time
     - `custom.size_and_fit` - Size and fit information
     - `custom.care` - Care instructions

4. **Upload Assets**
   - Fonts should be in `assets/fonts/`
   - Videos should be in `assets/videos/`
   - Images should be in `assets/images/`

## Features

- ✅ Responsive design
- ✅ Product listing with grid view options (2, 4, 8 columns)
- ✅ Product sorting (date, price)
- ✅ Product detail pages with image gallery
- ✅ Shopping cart drawer
- ✅ Custom fonts (NF Ultra, Helvetica Neue LT Com, Sequel Sans, etc.)
- ✅ Homepage video background
- ✅ Intro animation
- ✅ Navigation with mobile menu

## Customization Notes

- The theme uses Shopify's native cart functionality (no external APIs)
- Product data comes from Shopify products and collections
- Static content (About, Events, Gallery, Clients) should be added via Shopify pages or metafields
- All styling has been converted from styled-components to CSS
- JavaScript functionality uses vanilla JS (no React dependencies)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- No external API dependencies

## Important Notes

- This theme replaces the default Shopify storefront
- All external APIs (Contentful, Stripe, etc.) have been removed
- Cart functionality uses Shopify's native cart system
- Product images should be uploaded to Shopify products
- Videos should be uploaded to Shopify assets

