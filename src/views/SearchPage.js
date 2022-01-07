import { Category, FavouritesCategories } from "components/Search/Category";
import React from "react";
import {
  categories as allCategories,
  favouriteCategories as allFavoriteCategories,
} from "assets/data/categories";

const SearchPage = () => {
  const [categories, setCategories] = React.useState([]);
  const [favouritesCategories, setFavouritesCategories] = React.useState([]);

  React.useEffect(() => {
    setCategories(allCategories);
    setFavouritesCategories(allFavoriteCategories);
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="grid gap-6 pt-2 px-8 ">
        <FavouritesCategories categories={favouritesCategories} />
        <Category categories={categories} />
      </div>
    </div>
  );
};

export default SearchPage;
