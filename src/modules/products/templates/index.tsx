import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import Module_price from "@modules/products/components/module_price/Module_price"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Heading } from "@medusajs/ui"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="max-w-screen-xl m-auto px-4 flex flex-col small:flex-row small:items-start py-6 relative"
        data-testid="product-container"
      >
        <div className="w-8/12">
          <div className="block w-full relative">
            <div className="pb-4">
              {product.collection && (
                <LocalizedClientLink
                  href={`/collections/${product.collection.handle}`}
                  className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
                >
                  {product.collection.title}
                </LocalizedClientLink>
              )}
              <Heading
                level="h2"
                className="text-1xl leading-8 text-ui-fg-base"
                data-testid="product-title"
              >
                {product.title}
              </Heading>
            </div>
            <ImageGallery images={product?.images || []} />
          </div>
        </div>
        <div className="w-4/12   small:sticky small:top-18 small:py-0 ">
          <div className="flex flex-col w-full py-8 gap-y-12">
            {/* <ProductOnboardingCta /> */}
            <Module_price/>
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <div className="w-full py-8 gap-y-6 w-8/12">
          <ProductTabs product={product} />
          <ProductInfo product={product} />
        </div>
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
