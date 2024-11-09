const deg2rad = (degrees) => degrees * (Math.PI / 180);
export const useCalculateDistance = ({ lat1, long1, lat2, long2 }) => {
  //   let lat1 = 52.2296756;
  //   let lat2 = 41.89193;
  //   let long1 = 21.0122287;
  //   let long2 = 12.51133;
  var R = 6371;
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(long2 - long1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = (R * c).toFixed(2);

  return { distance };
};
