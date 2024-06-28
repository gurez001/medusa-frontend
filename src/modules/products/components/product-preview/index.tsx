import { Button, Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"
import { Heart, StarSolid } from "@medusajs/icons"
import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper">
        <div className="relative">
          <Thumbnail
            thumbnail={productPreview.thumbnail}
            size="full"
            isFeatured={isFeatured}
          />
          <div className="absolute bottom-2 left-2 bg-backgound-5 py-0.5 px-1 rounded">
            <div className="flex gap-0.5 text-12 items-center text-white">
              <span>4.4</span>
              <span>
                <StarSolid className="text-textColor-5" />
              </span>
              <span>|</span>
              <span>322</span>
            </div>
          </div>
        </div>
        <div className="bg-white px-2">
          <div className="hidden hover:block">
            <Button
              className="px-7 w-full text-white bg-backgound-5 hover:text-backgound-5"
              variant="secondary"
            >
              <Heart /> WISHLIST
            </Button>
            <p className="text-12 my-2">Size: 4x4x4</p>
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
          <div className="txt-compact-medium pt-2">
            <Text className="text-ui-fg-subtle" data-testid="product-title">
            {/* {productPreview && productPreview.collection} */}
            collection
            </Text>
            <Text className="text-ui-fg-subtle whitespace-nowrap overflow-hidden text-ellipsis" data-testid="product-title">
              {productPreview.title}
            </Text>
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
