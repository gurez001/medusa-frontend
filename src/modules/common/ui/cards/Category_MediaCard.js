import Image from "next/image"
import React, { useRef } from "react"
const img = "https://m.media-amazon.com/images/I/71iXKV3WY4L._SL1500_.jpg"
const Category_MediaCard = ({ item, event_handler, index, active_index }) => {
  return (
    <>
      <div className="shadow-md rounded-2xl overflow-hidden bg-white">
        <div className="p-6">
          <img
            className="w-full"
            src={img}
            alt="Sunset in the mountains"
            width={100}
            height={100}
          />
        </div>
        <div className="px-2 text-center bg-backgound-5 py-2">
          <h3 onClick={() => event_handler(item.id)} className="text-sm cursor-pointer">
            {item.title}
          </h3>
        </div>
      </div>
    </>
  )
}

export default Category_MediaCard
