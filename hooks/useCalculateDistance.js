import { DATA_CONSTANTS } from "../constants/AppConstants";

const deg2rad = (degrees) => degrees * (Math.PI / 180);

export const useCalculateDistance = ({ lat1, long1, lat2, long2 }) => {
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(long2 - long1);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = (DATA_CONSTANTS.EARTH_RADIUS_KM * c).toFixed(DATA_CONSTANTS.PRICE_DECIMAL_PLACES);

  return { distance };
};
