/**
 * Contentful API Client for Shopify Theme
 * Fetches content from Contentful CMS automatically
 */

// Contentful API Configuration
// Uses hardcoded credentials (can be overridden via theme settings)
function getContentfulConfig() {
  // Try theme settings first, then fallback to hardcoded
  const spaceId = window.Shopify?.theme?.settings?.contentful_space_id || 
                  document.querySelector('meta[name="contentful-space-id"]')?.content ||
                  '7hzrdjnlh3kp';
  const accessToken = window.Shopify?.theme?.settings?.contentful_access_token ||
                      document.querySelector('meta[name="contentful-access-token"]')?.content ||
                      'Vy1BVT-U0L-a3iOjy77lwXCqK9gasRInMfHyy5ZnVig';
  const environment = 'master';
  
  return { spaceId, accessToken, environment };
}

const config = getContentfulConfig();
const CONTENTFUL_API_URL = `https://cdn.contentful.com/spaces/${config.spaceId}/environments/${config.environment}/entries`;

// Cache to avoid repeated API calls
const cache = {
  talent: null,
  about: null,
  clients: null,
  events: null,
  gallery: null,
  cacheTime: 5 * 60 * 1000, // 5 minutes
  timestamps: {}
};

/**
 * Fetch from Contentful API
 */
async function fetchFromContentful(contentType, params = {}) {
  const cacheKey = `${contentType}_${JSON.stringify(params)}`;
  const now = Date.now();
  
  // Check cache
  if (cache[contentType] && cache.timestamps[cacheKey]) {
    const age = now - cache.timestamps[cacheKey];
    if (age < cache.cacheTime) {
      const cached = cache[contentType];
      // Return in consistent format
      if (cached.items) {
        return cached;
      }
      return { items: cached, includes: null };
    }
  }

  try {
    const config = getContentfulConfig();
    const queryParams = new URLSearchParams({
      content_type: contentType,
      access_token: config.accessToken,
      include: '2', // Include linked assets
      ...params
    });

    const apiUrl = `https://cdn.contentful.com/spaces/${config.spaceId}/environments/${config.environment}/entries`;
    const response = await fetch(`${apiUrl}?${queryParams}`);
    
    if (!response.ok) {
      throw new Error(`Contentful API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Store both items and includes for asset resolution
    cache[contentType] = {
      items: data.items,
      includes: data.includes
    };
    cache.timestamps[cacheKey] = now;
    
    return {
      items: data.items,
      includes: data.includes
    };
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    // Return cached data if available, even if stale
    const cached = cache[contentType];
    return cached ? (cached.items ? cached : { items: cached, includes: null }) : { items: [], includes: null };
  }
}

/**
 * Get image URL from Contentful asset (can be Link or full Asset object)
 */
function getContentfulImageUrl(asset, width = 800, includes = null) {
  // If asset is a Link object, resolve it from includes
  if (asset && asset.sys && asset.sys.type === 'Link' && includes && includes.Asset) {
    const assetId = asset.sys.id;
    const fullAsset = includes.Asset.find(a => a.sys.id === assetId);
    if (fullAsset && fullAsset.fields && fullAsset.fields.file) {
      const url = fullAsset.fields.file.url;
      if (url.startsWith('//')) {
        return `https:${url}?w=${width}`;
      }
      return `${url}?w=${width}`;
    }
  }
  
  // If asset is already a full Asset object
  if (asset && asset.fields && asset.fields.file) {
    const url = asset.fields.file.url;
    if (url.startsWith('//')) {
      return `https:${url}?w=${width}`;
    }
    return `${url}?w=${width}`;
  }
  
  return '';
}

/**
 * Fetch Team Members (Talent)
 */
async function fetchTeamMembers() {
  const result = await fetchFromContentful('talent');
  const items = result.items || result; // Handle both formats
  const includes = result.includes || null;
  
  return items.map(item => ({
    id: item.sys.id,
    firstName: item.fields.firstName || '',
    lastName: item.fields.lastName || '',
    role: item.fields.role || '',
    bio: item.fields.bio || '',
    profilePicture: item.fields.profilePicture || null,
    profilePictureUrl: getContentfulImageUrl(item.fields.profilePicture, 700, includes)
  }));
}

/**
 * Fetch About Content
 */
async function fetchAboutContent() {
  const result = await fetchFromContentful('about');
  const items = result.items || result; // Handle both formats
  return items.length > 0 ? items[0].fields.aboutUs : '';
}

/**
 * Fetch Clients
 */
async function fetchClients() {
  const result = await fetchFromContentful('clients');
  const items = result.items || result; // Handle both formats
  
  return items.map(item => ({
    id: item.sys.id,
    name: item.fields.clientName || '',
    description: item.fields.description || '',
    companyType: item.fields.companyType || '',
    yearStarted: item.fields.yearStarted || new Date().getFullYear(),
    isCompleted: item.fields.isCompleted || false
  }));
}

/**
 * Fetch Events
 */
async function fetchEvents() {
  const result = await fetchFromContentful('events');
  const items = result.items || result; // Handle both formats
  const includes = result.includes || null;
  
  return items.map(item => ({
    id: item.sys.id,
    name: item.fields.name || '',
    description: item.fields.description || '',
    date: item.fields.date || '',
    location: item.fields.location || '',
    time: item.fields.time || '',
    ticketCount: item.fields.ticketCount || '',
    musicInformation: item.fields.musicInformation || '',
    alternateDescription: item.fields.alternateDescription || '',
    thumbnailImage: item.fields.thumbnailImage || [],
    thumbnailImageUrl: getContentfulImageUrl(item.fields.thumbnailImage?.[0], 800, includes),
    wistiaVideo: item.fields.wistiaVideo || null,
    wistiaVideoId: (item.fields.wistiaVideo?.items?.[0]?.hashed_id || item.fields.wistiaVideoId || null),
    isVideo: item.fields.isVideo || false
  }));
}

/**
 * Fetch Gallery Images
 */
async function fetchGalleryImages() {
  const result = await fetchFromContentful('gallery');
  const items = result.items || result; // Handle both formats
  const includes = result.includes || null;
  
  return items.map(item => ({
    id: item.sys.id,
    imageUrl: getContentfulImageUrl(item.fields.image, 1200, includes),
    description: item.fields.descriptions || '',
    location: item.fields.location || ''
  }));
}

// Export functions for use in Liquid templates
window.ContentfulAPI = {
  fetchTeamMembers,
  fetchAboutContent,
  fetchClients,
  fetchEvents,
  fetchGalleryImages,
  getContentfulImageUrl
};

