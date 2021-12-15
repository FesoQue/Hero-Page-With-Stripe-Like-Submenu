import React from 'react';
import { subLinks } from '../data/data';
import Submenu from './Submenu';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../contextAPI/Context';

const Modal = () => {
  const data = useGlobalContext();
  const { isModalOpen, handleModalClose } = data;
  return (
    <div className={`${isModalOpen ? 'modal-wrapper show' : 'modal-wrapper'}`}>
      <div className='modal-content container'>
        {/* close button */}
        <span className='close-btn' onClick={handleModalClose}>
          <FaTimes />
        </span>
        {subLinks.map((sublink, index) => {
          const { pages, subMenu } = sublink;
          return (
            <div key={index}>
              <div className='menu-label'>
                <span>{pages.icons}</span>
                <p>{pages.menu}</p>
              </div>
              <ul className='links-wrapper'>
                {subMenu.map((link, index) => {
                  const { linkLabel, url } = link;
                  return (
                    <li className='link-list' key={index}>
                      <a href={url}>{linkLabel}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
