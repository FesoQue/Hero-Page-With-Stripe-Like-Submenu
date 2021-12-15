import React from 'react';
import HERO_IMAGE from '../images/hero-image.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useGlobalContext } from '../contextAPI/Context';

const Hero = () => {
  const data = useGlobalContext();
  const { handleSubmenuClose } = data;
  const closeSubmenu = () => {
    handleSubmenuClose();
  };
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-contents container' onMouseOver={closeSubmenu}>
        <article className='hero-texts'>
          <h1>
            A Byte Of <br /> Trending Look
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            explicabo magni dolorum! Ipsam incidunt aspernatur error impedit
            tempora hic corrupti?
          </p>
          {/* cta btn */}
          <div className='cta'>
            <button className='btn cta-btn'>
              Explore Shops
              <span>
                {' '}
                <HiArrowNarrowRight />
              </span>
            </button>
          </div>
        </article>
        {/* hero-img */}
        <article className='hero-image'>
          <div className='img-wrapper'>
            <img src={HERO_IMAGE} alt='person' />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
