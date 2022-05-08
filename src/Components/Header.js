import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay,Navigation } from 'swiper';

import '../Styles/Header.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation'

import BusinessImageOne from '../Assets/Images/business_image_one.jpg'
import BusinessImageTwo from '../Assets/Images/business_image_two.jpg'

function Header() {
  return (
    <Swiper
      autoplay={true}
      pagination={true }
      navigation
      modules={[Pagination, Autoplay,Navigation]}>
      <SwiperSlide>
        <header>
          <div className="container header__container">
            <div className="header__top">
              <h2>
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit magni ab optio perferendis, dolores ducimus esse, ipsum, odio id nihil quasi aliquam incidunt dolore molestiae corrupti? Doloribus velit exercitationem architecto?</p>
            </div>
            <div className="header__bottom">
              <img src={BusinessImageOne} alt="Business one" />
            </div>
          </div>
        </header>
      </SwiperSlide>
      <SwiperSlide>
        <header>
          <div className="container header__container">
            <div className="header__top">
              <h2>
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit magni ab optio perferendis, dolores ducimus esse, ipsum, odio id nihil quasi aliquam incidunt dolore molestiae corrupti? Doloribus velit exercitationem architecto?</p>
            </div>
            <div className="header__bottom">
              <img src={BusinessImageTwo} alt="Business two" />
            </div>
          </div>
        </header>
      </SwiperSlide>
    </Swiper>
  )
}

export default Header