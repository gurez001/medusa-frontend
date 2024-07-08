import React from "react"
import Categorie_slider from "@modules/common/ui/sliders/Categorie_slider"
import { getCollectionsList } from "@lib/data"
import { medusaClient } from "@lib/config"
import ProductPreview from '@modules/products/components/product-preview';
const Categorie = async ({ region }) => {
  const { collections } = await getCollectionsList()
  const { products } = await medusaClient.products.list()

  if (!collections) {
    return null
  }
  
  return (
    <div className="max-w-7xl mx-auto">
      <Categorie_slider collections={collections} />

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 lg:gap-x-5 lg:gap-y-10">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview
                productPreview={product}
                region={region}
                isFeatured
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Categorie
