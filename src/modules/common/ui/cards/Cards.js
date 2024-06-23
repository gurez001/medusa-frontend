// import {
//   div,
//   Button,
//   Card,
//   div,
//   div,
//   div,
//   p,
// } from "@mui/material";
import { Button } from "@medusajs/ui"
import React from "react"
// import customTheme from "../theme/theme.config";

// import { CiHeart } from "react-icons/ci";
// import { FaStar } from "react-icons/fa6";

const Cards = ({ item }) => {
  return (
    <>
      <div>
        <div>
          <div 
          // title={item.title} 
          />
          <div>
            <img src="https://www.upack.in/media/catalog/product/cache/53044a3cfd6bcac7163468e00689f8a8/u/p/upkj233p248_1.jpg"/>
          </div>
          <div>
            <p>
              <span>4.4</span>
              <span>{/* <FaStar /> */}</span>
              <span>|</span>
              <span>322</span>
            </p>
          </div>
        </div>

        <div>
          <Button>
            {/* <CiHeart style={{ fontSize: "20px" }} /> WISHLIST */}
          </Button>
          <p>Size: 4x4x4</p>
        </div>
        <div>
          <div>
            <p>Category</p>
            <p>title</p>
            <p>
              <span> ₹60</span>
              <span>₹5000</span>

              <span>(60% Off)</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
