import react, { useState, createContext, useContext } from 'react';
import { subLinks } from '../data/data';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [navPages, setNavPages] = useState({ pages: {}, subMenu: [] });
  const [location, setLocation] = useState({});

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleSubmenuOpen = (text, coord) => {
    const navPages = subLinks.find((navPage) => {
      const { pages } = navPage;
      return pages.menu === text;
    });
    setNavPages(navPages);
    setLocation(coord);
    setIsSubmenuOpen(true);
  };
  const handleSubmenuClose = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSubmenuOpen,
        handleModalOpen,
        handleSubmenuOpen,
        handleModalClose,
        handleSubmenuClose,
        location,
        navPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
