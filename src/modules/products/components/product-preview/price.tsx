import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      <div className="flex items-center gap-x-2 text-12 my-1">
        {price.price_type === "sale" && (
          <Text
            className="line-through text-ui-fg-muted"
            data-testid="original-price"
          >
            {price.original_price}
          </Text>
        )}
        <Text
          className={clx(" text-black", {
            "text-black": price.price_type === "sale",
          })}
          data-testid="price"
        >
          {price.calculated_price}
        </Text>
        <Text className="line-through text-ui-fg-muted  text-12">900</Text>
        <Text className="text-textColor-1">
          <span className="text-12">(60% Off)</span>
        </Text>
      </div>
    </>
  )
}

// className={clx("", {
//   "text-ui-fg-interactive": p
