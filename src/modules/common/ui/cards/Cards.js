import { medusaClient } from "@lib/config"
import { Button } from "@medusajs/ui"
import { useProducts } from "medusa-react"
import React from "react"

const Cards = ({ active_index }) => {
  medusaClient.products.list({expand:"categories"})
  .then(({ products, limit, offset, count }) => {
    console.log(products)
  })
  return (
    <>
     {/* <ProductPreviewz */}
    </>
  )
}

export default Cards
