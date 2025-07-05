// App-wide constants
export const APP_CONSTANTS = {
  LOADER_DURATION: 3000,
  DEFAULT_RATING: "4.75",
  DEFAULT_REVIEWS: "4.4K reviews",
  FEATURED_DISHES_LIMIT: 6,
  CART_BADGE_SIZE: 16,
  CART_BADGE_OFFSET: 5,
} as const;

// Tab navigation constants
export const TAB_COLORS = {
  ACTIVE: "green",
  INACTIVE: "gray",
} as const;

// Theme colors
export const THEME_COLORS = {
  PRIMARY: "#15803D",
  SECONDARY: "#EF4444",
  TERTIARY: "#6366F1",
} as const;

// API/Data constants
export const DATA_CONSTANTS = {
  EARTH_RADIUS_KM: 6371,
  PRICE_DECIMAL_PLACES: 2,
} as const; 