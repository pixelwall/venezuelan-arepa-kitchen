import { Product } from '@/lib/models/product'
import Viewport, { setAnim } from '@/components/viewport'
import { Image } from 'react-datocms'
import Link from 'next/link'
import { View16, ShoppingCart16 } from '@carbon/icons-react'

export const MenuCard = (menu: Product) => (
  <Viewport oneWay>
    <div className="flex flex-col w-full animate" style={setAnim({ y: '0.5rem' })}>
      <div className="mb-8 relative">
        <div
          className="h-full w-full animate -z-10 absolute"
          style={{ aspectRatio: '1/1', ...setAnim({ x: '-1.5rem', y: '-1.5rem', d: '0.2s' }) }}
        >
          <div className="h-full w-full transform translate-x-6 translate-y-6 polka" />
        </div>
        <Image
          data={{
            ...menu.images[0].responsiveImage
          }}
        />
      </div>
      <h3 className="font-handwritten mb-6 orange-gradient t-h2">{menu.title}</h3>
      <div className="mb-2 relative">
        <div
          className="h-full w-full animate -z-10 absolute"
          style={{ aspectRatio: '1/1', ...setAnim({ x: '-1.5rem', y: '-1.5rem', d: '0.4s' }) }}
        >
          <div className="h-full w-full transform translate-x-6 translate-y-6 polka" />
        </div>
        <div className="bg-blue-100 bg-opacity-50 p-4 animate">
          <p className="font-bold font-title mb-2">Category:&nbsp;
            <Link href={`/menu?category=${menu.category.slug}`}>
              <a className="hover:underline">{menu.category.name}</a>
            </Link>
          </p>
          <p className="flex font-title font-bold w-full text-2xl justify-end items-end">
            <span className="font-handwritten text-base mr-1">For&nbsp;</span> $ {menu.price}
          </p>
        </div>
      </div>
      <div className="flex mt-8 w-full animate" style={setAnim({ d: '100ms' })}>
        <div className="pr-1 w-1/2">
          <button
            className="rounded-tl-full rounded-bl-full flex font-bold font-title border-2 border-x-gray-900 text-center w-full py-2 px-4 duration-200 snipcart-add-item justify-between items-center hover:text-white hover:bg-x-gray-900"
            data-item-id={menu.slug}
            data-item-price={menu.price}
            data-item-url={`/menu/${menu.slug}`}
            data-item-description={menu.category.name}
            data-item-image={menu.images[0].responsiveImage.src}
            data-item-name={menu.title}
          >
            To cart
            <ShoppingCart16 />
          </button>
        </div>
        <div className="pl-1 w-1/2">
          <Link href={`/menu/${menu.slug}`}>
            <a
              className="rounded-tr-full rounded-br-full flex font-bold font-title border-2 border-x-gray-900 text-center w-full py-2 px-4 duration-200 justify-between items-center hover:text-white hover:bg-x-gray-900"
            >
              <View16 />
              View
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Viewport>
)
