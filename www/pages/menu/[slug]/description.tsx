import { setAnim } from '@/components/viewport'
import { ResponsiveImage } from '@/lib/models/cms'
import { Product } from '@/lib/models/product'
import { Add16 } from '@carbon/icons-react'
import { useState } from 'react'
import Link from 'next/link'

type QuantityProps = {
  value: number
  onChange: (number) => number
}

const Quantity: React.FC<QuantityProps> = ({ value, onChange }) => (
  <div
    className="rounded-full inline-flex font-bold font-title border-2 border-x-gray-900 text-center w-full justify-between items-center overflow-hidden"
  >
    <button className="flex border-r rounded-none h-full border-x-gray-900 hover:text-white hover:bg-x-gray-900 duration-200">
      <div className="py-2 px-4">
        <Add16 />
      </div>
    </button>
    <span className="py-2">
      {value}
    </span>
    <button className="flex flex-col border-l rounded-none h-full border-x-gray-900 hover:text-white hover:bg-x-gray-900 duration-200">
      <div className="py-2 px-4">
        <Add16 />
      </div>
    </button>
  </div>
)

const Description = (menu: Product) => {
  const [quantity, setQuantity] = useState(0)
  return (
    <>
      <h3 className="font-handwritten font-bold mb-6 text-5xl orange-gradient">{menu.title}</h3>
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
          <p className="flex font-title font-bold w-full text-4xl justify-end items-end">
            <span className="font-handwritten mr-1 text-xl">For&nbsp;</span> $ {menu.price}
          </p>
        </div>
      </div>
      <div className="flex mt-12 w-full animate" style={setAnim({ d: '100ms' })}>
        <div className="pr-1 w-1/2">
          <Quantity value={quantity} onChange={setQuantity} />
        </div>
        <div className="pl-1 w-1/2">
          <button
            className="rounded-full flex font-bold font-title border-2 border-x-gray-900 text-center w-full py-2 px-4 duration-200 snipcart-add-item justify-center items-center hover:text-white hover:bg-x-gray-900"
            data-item-id={menu.slug}
            data-item-price={menu.price}
            data-item-url={`/menu/${menu.slug}`}
            data-item-description={menu.category.name}
            data-item-image={menu.images[0].responsiveImage.src}
            data-item-name={menu.title}
          >
            Add to cart
            <Add16 className="ml-3" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Description
