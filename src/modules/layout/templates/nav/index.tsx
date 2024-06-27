import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import Logo from "../Images/Logo.png"
import { medusaClient } from "@lib/config"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)
  const { product_categories, limit, offset, count } =
    await medusaClient.productCategories.list()
 

  return (
    <div className="sticky bg-backgound-0 top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 border-ui-border-base">
        <nav className="max-w-7xl px-4 mx-auto txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="w-1/3">
            <div className="w-full items-center gap-x-6 h-full">
              <div className="block md:hidden">
                <SideMenu regions={regions} />
              </div>

              <div className="hidden items-center gap-x-6 md:flex">
                {product_categories
                  .filter((item) => item.parent_category_id === null)
                  .map((item) => (
                    <div className="parent-nav">
                      <LocalizedClientLink
                        key={item.id}
                        className="hover:text-ui-fg-base"
                        href={`/${item.handle}`}
                        data-testid="nav-account-link"
                      >
                        {item.name}
                      </LocalizedClientLink>
                      <div className="absolute left-10 child-nav">
                        <div className="w-11/12 p-3 place-content-center grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-x-2 lg:gap-x-3 lg:gap-y-5 bg-backgound-5 rounded-lg">
                          {product_categories
                            .filter(
                              (subitem) =>
                                subitem.parent_category_id === item.id
                            )
                            .map((subitem) => (
                              <LocalizedClientLink
                                key={subitem.id}
                                className="text-textColor-0 rounded-lg hover:text-black p-3 shadow-lg bg-white"
                                href={`/${subitem.handle}`}
                                data-testid="nav-account-link"
                              >
                                <div>
                                  <img
                                  className="p-4"
                                    src="https://www.upack.in/media/catalog/product/cache/53044a3cfd6bcac7163468e00689f8a8/3/2/323b-min.jpg"
                                    alt="th"
                                  />
                               <p className="text-center">   {subitem.name}</p>
                                </div>
                              </LocalizedClientLink>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="w-full flex justify-center">
              <LocalizedClientLink
                href="/"
                className="block"
                data-testid="nav-store-link"
              >
                <Image src={Logo} alt="ig" width={100} height={100} />
              </LocalizedClientLink>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
              <div className="hidden small:flex items-center gap-x-6 h-full">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/search"
                    scroll={false}
                    data-testid="nav-search-link"
                  >
                    Search
                  </LocalizedClientLink>
                )}
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/blog"
                  data-testid="nav-account-link"
                >
                  Blog
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  Account
                </LocalizedClientLink>
              </div>
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base flex gap-2"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    Cart (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
        