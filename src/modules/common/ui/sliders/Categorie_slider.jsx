"use client"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Parallax, Navigation } from "swiper/modules"
import Cards from "../cards/Cards"
import Category_MediaCard from "../cards/Category_MediaCard"
import useStickyAndResize from "@modules/common/components/current-width/useStickyAndResize"

const Categorie_slider = ({ collections }) => {
  const [active_index, set_active_index] = useState(null)
  const show_data_handler = (index) => {
    set_active_index((prevIndex) => (prevIndex === index ? null : index))
  }
  const currentIndex = ()=>{

  }
  const {windowWidth} = useStickyAndResize()
  return (
    <>
      <div className="py-4 md:py-12">
        <div>
          <Swiper
            slidesPerView={
              windowWidth < 650
                ? 2
                : windowWidth < 767
                ? 3
                : windowWidth < 900
                ? 3.5
                : 4.5
            }
            spaceBetween={
              windowWidth < 500
                ? 0
                : windowWidth < 767
                ? 2
                : windowWidth < 900
                ? 5
                : 20
            }
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Parallax, Navigation]}
            className="mySwiper"
          >
            {collections?.map((item, index) => (
              <SwiperSlide key={index}>
                <Category_MediaCard
                item={item}
                  event_handler={currentIndex}
                  index={index}
                  active_index={active_index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      
    </>
  )
}

export default Categorie_slider
