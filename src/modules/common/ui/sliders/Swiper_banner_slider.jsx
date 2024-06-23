"use client"
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Parallax, Pagination, Navigation } from "swiper/modules"
// Import Swiper styles
import "./slider.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Button } from "@medusajs/ui"
import corrugatedbox from "@modules/layout/templates/Images/corrugatedbox.png"
import Image from "next/image"
const Swiper_banner_slider = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="py-4 md:py-12">
          <Swiper
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
            <SwiperSlide>
              <div className="flex-col  md:flex-row flex justify-between items-center mt-10 md:mt-0">
                <div className="w-full md:order-1 md:w-1/2  order-2">
                  <h2 className="title" data-swiper-parallax="-300">
                    Corrugated dives
                  </h2>
                  <div data-swiper-parallax="-100">
                    <p className="text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam dictum mattis velit, sit amet faucibus felis
                      iaculis nec. Nulla laoreet justo vitae porttitor
                      porttitor. Suspendisse in sem justo. Integer laoreet magna
                      nec elit suscipit, ac laoreet nibh euismod. Aliquam
                      hendrerit lorem at elit facilisis rutrum. Ut at
                      ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia
                      nec, tincidunt ut libero. Aenean feugiat non eros quis
                      feugiat.
                    </p>
                    <div className="mt-3">
                      <Button
                        className="px-7 text-white bg-backgound-5 hover:text-backgound-5"
                        variant="secondary"
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:order-2 md:w-1/2 order-1">
                  <Image
                    src={corrugatedbox}
                    alt="ig"
                    width={"100%"}
                    height={"100%"}
                    className="min-w-lg pl-3"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Swiper_banner_slider
