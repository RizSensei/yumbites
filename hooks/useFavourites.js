import { useSelector } from "react-redux";
import {
  selectFavourites,
  selectFavouritesCount,
  selectIsFavourite,
} from "../redux/slices/favouriteSlice";

export const useFavourites = () => {
  const favourites = useSelector(selectFavourites);
  const favouritesCount = useSelector(selectFavouritesCount);
  const isFavourite = useSelector(selectIsFavourite);

  return { favourites, favouritesCount, isFavourite };
}; 