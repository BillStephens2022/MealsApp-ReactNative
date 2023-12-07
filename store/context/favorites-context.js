import { createContext } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  return (
    <FavoritesContextProvider.Provider>
      {children}
    </FavoritesContextProvider.Provider>
  );
}

export default FavoritesContextProvider;
