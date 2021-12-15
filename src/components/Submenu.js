import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../contextAPI/Context';
import { FcLink } from 'react-icons/fc';

const Submenu = () => {
  const container = useRef(null);
  const linksContainer = useRef(null);
  const data = useGlobalContext();
  const { isSubmenuOpen, navPages, location } = data;
  const { centerPos, bottomPos } = location;
  const { pages, subMenu } = navPages;
  const [columns, setColumns] = useState('col-4');

  useEffect(() => {
    const subMenuEl = container.current;
    subMenuEl.style.left = `${centerPos}px`;
    subMenuEl.style.bottom = `${bottomPos}px`;

    if (subMenu.length === 8) {
      setColumns('col-3');
    }
    if (subMenu.length < 8) {
      setColumns('col-4');
    }
  }, [location]);
  return (
    <>
      <div
        className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
        ref={container}
      >
        <div className='submenu-content container'>
          {/* <h4>{pages.menu}</h4> */}
          {/* submenu items */}
          <div className={`submenu-links ${columns}`} ref={linksContainer}>
            {subMenu.map((sub, index) => {
              return (
                <div key={index}>
                  <span>
                    <FcLink />
                  </span>
                  <a href={sub.url}>{sub.linkLabel}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Submenu;
