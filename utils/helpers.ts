import { DATA_CONSTANTS } from "../constants/AppConstants";

// Format price with proper decimal places
export const formatPrice = (price: number): string => {
  return price.toFixed(DATA_CONSTANTS.PRICE_DECIMAL_PLACES);
};

// Calculate total price for cart items
export const calculateTotal = (items: Array<{ price: number; quantity: number }>): string => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return formatPrice(total);
};

// Debounce function for search inputs
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generate unique ID
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}; 