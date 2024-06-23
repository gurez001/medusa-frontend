import Image from "next/image"
import React, { useRef } from "react"
const img = "https://m.media-amazon.com/images/I/71iXKV3WY4L._SL1500_.jpg"
const Category_MediaCard = ({ item, event_handler, index, active_index }) => {
  return (
    <>
      <div class="shadow-md  rounded-lg overflow-hidden">
        <img
          class="w-full"
          src={img}
          alt="Sunset in the mountains"
          width={100}
          height={100}
        />
        <div class="px-2 text-center bg-backgound-5 py-2">
          <h3 onClick={() => event_handler(index)} class="text-xl">
            categorie
          </h3>
        </div>
      </div>
    </>
  )
}

export default Category_MediaCard
