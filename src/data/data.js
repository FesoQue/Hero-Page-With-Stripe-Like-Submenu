import React from 'react';
import { FcAbout, FcMultipleDevices } from 'react-icons/fc';
import { GiClothes, GiAmpleDress } from 'react-icons/gi';
import { BsSunglasses } from 'react-icons/bs';

export const subLinks = [
  {
    pages: {
      menu: 'Clothings',
      icons: <GiAmpleDress />,
    },
    subMenu: [
      { linkLabel: 'Tees', url: '/tees' },
      { linkLabel: 'Formal Shirt', url: '/formal-shirt' },
      { linkLabel: 'Casual T shirt', url: '/casual-tshirt' },
      { linkLabel: 'Suit & Blazer', url: '/suit-blazer' },
      { linkLabel: 'Shorts', url: '/shorts' },
      { linkLabel: 'Jeans & Cargos', url: '/jeans-cargo' },
      { linkLabel: 'Jackets', url: '/jackets' },
      { linkLabel: 'Sweatshirt & hoodies', url: '/sweatshirt-hoodies' },
    ],
  },
  {
    pages: {
      menu: 'Accessories',
      icons: <BsSunglasses />,
    },
    subMenu: [
      { linkLabel: 'Backpacks', url: '/backpacks' },
      { linkLabel: 'Sunglasses', url: '/sunglasses' },
      { linkLabel: 'Bags', url: '/bags' },
      { linkLabel: 'WristWatches', url: '/wristwaches' },
      { linkLabel: 'Sandals', url: '/sandals' },
      { linkLabel: 'Wallets', url: '/wallet' },
      { linkLabel: 'Luggages', url: '/lugagges' },
    ],
  },
  {
    pages: {
      menu: 'Gadgets',
      icons: <FcMultipleDevices />,
    },
    subMenu: [
      { linkLabel: 'iPhone', url: '/iphone' },
      { linkLabel: 'PS5', url: '/ps5' },
      { linkLabel: 'Mcbook', url: '/mcbook' },
      { linkLabel: 'Xbox', url: '/xbox' },
      { linkLabel: 'Apple Watch', url: '/wallet' },
    ],
  },
  {
    pages: {
      menu: 'Information',
      icons: <FcAbout />,
    },
    subMenu: [
      { linkLabel: 'New Product', url: '/new-product' },
      { linkLabel: 'Top Sellers', url: '/top-sellers' },
      { linkLabel: 'Specials', url: '/specials' },
      { linkLabel: 'Delivery', url: '/delivery' },
      { linkLabel: 'About Us', url: '/about-us' },
      { linkLabel: 'Contact Us', url: '/contact-us' },
      { linkLabel: 'FAQ', url: '/faq' },
      { linkLabel: 'Sitemap', url: '/sitemap' },
    ],
  },
];
