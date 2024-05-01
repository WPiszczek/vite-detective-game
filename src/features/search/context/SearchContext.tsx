import { FC, ReactNode, createContext, useState } from "react";
import { DrawerAnimationState } from "../types";

export const SearchContext = createContext<{
  searchDrawerAnimationState: DrawerAnimationState;
  toggleDrawer: () => void;
}>(null);

export const SearchProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [searchDrawerAnimationState, setSearchDrawerAnimationState] =
    useState<DrawerAnimationState>(DrawerAnimationState.NO_SLIDE);

  const toggleDrawer = () => {
    setSearchDrawerAnimationState((prev) => (prev % 2) + 1);
  };

  return (
    <SearchContext.Provider
      value={{
        searchDrawerAnimationState,
        toggleDrawer
      }}>
      {children}
    </SearchContext.Provider>
  );
};
