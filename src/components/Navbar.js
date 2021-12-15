import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import CART from '../images/cart.svg';
import { useGlobalContext } from '../contextAPI/Context';

const Navbar = () => {
  const data = useGlobalContext();
  const { handleModalOpen, handleSubmenuOpen, handleSubmenuClose } = data;

  const openSubmenu = (e) => {
    const pageLinkName = e.target.textContent;

    const pageLinkBtn = e.target.getBoundingClientRect();

    const leftPosValue = pageLinkBtn.left;
    const rightPosValue = pageLinkBtn.right;
    const centerPos = (leftPosValue + rightPosValue) / 2;
    const bottomPos = pageLinkBtn.bottom;

    handleSubmenuOpen(pageLinkName, { centerPos, bottomPos });
  };
  const closeSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      handleSubmenuClose();
    }
  };
  return (
    <nav>
      <div className='nav-header' onMouseOver={closeSubmenu}>
        <div className='nav-content container'>
          {/* logo */}
          <div className='logo'>
            <h2>Shopley</h2>
          </div>
          <div className='nav-links'>
            <button className='link-btn' onMouseOver={openSubmenu}>
              Clothings
            </button>
            <button className='link-btn' onMouseOver={openSubmenu}>
              Accessories
            </button>
            <button className='link-btn' onMouseOver={openSubmenu}>
              Gadgets
            </button>
            <button className='link-btn' onMouseOver={openSubmenu}>
              Information
            </button>
          </div>
          <div className='nav-icons'>
            {/* cart */}
            <div className='cart'>
              <img src={CART} alt='cart' />
              <div className='cart-count'>1</div>
            </div>
            {/* harmburger */}
            <button className='harmburger' onClick={handleModalOpen}>
              <span>
                <HiMenuAlt1 />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
