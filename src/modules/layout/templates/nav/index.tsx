import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import Logo from "../Images/Logo.png"
import Link from "next/link"
export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky bg-backgound-0 top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 border-ui-border-base">
        <nav className="max-w-7xl px-4 mx-auto txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="w-1/3">
            <div className="w-full items-center gap-x-6 h-full">
              <div className="block md:hidden">  
                <SideMenu regions={regions} />
              </div>
              <div className="hidden items-center gap-x-6 small:flex">
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/packaging"
                  data-testid="nav-account-link"
                >
                  Packaging
                </LocalizedClientLink>

                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/personal-care"
                  data-testid="nav-account-link"
                >
                  Personal Care
                </LocalizedClientLink>

                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/pet-care"
                  data-testid="nav-account-link"
                >
                  Pet Care
                </LocalizedClientLink>
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
