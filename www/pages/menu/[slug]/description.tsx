import { setAnim } from '@/components/viewport'
import { Product } from '@/lib/models/product'
import { Add16, Subtract16, Wheat24, ShoppingCart16 } from '@carbon/icons-react'
import { useState } from 'react'
import Link from 'next/link'

type QuantityProps = {
  value: number
  onChange: (number) => void
}

const Quantity: React.FC<QuantityProps> = ({ value, onChange }) => (
  <div className="-space-x-px rounded-md font-title w-full z-0 relative inline-flex">
    <button
      className="rounded-l-full font-medium border-l-2 border-t-2 border-b-2 border-x-gray-800 text-sm py-2 px-4 duration-200 hover:text-white relative inline-flex items-center focus:outline-none hover:bg-x-gray-800"
      onClick={() => onChange((v: number) => v = Math.max(1, v - 1))}
    >
      <Subtract16 />
    </button>
    <div className="flex-grow font-bold border-t-2 border-b-2 border-x-gray-800 text-center py-2 px-4 z-10">
      {value}
    </div>
    <button
      className="rounded-r-full font-medium border-r-2 border-t-2 border-b-2 border-x-gray-800 text-sm py-2 px-4 duration-200 focus:outline-none hover:text-white relative inline-flex items-center hover:bg-x-gray-800"
      onClick={() => onChange((v: number) => v = Math.min(10, v + 1))}
    >
      <Add16 />
    </button>
  </div>
)

const Description = (menu: Product) => {
  const [quantity, setQuantity] = useState(1)
  return (
    <>
      <h1 className="font-handwritten font-bold mb-6 text-5xl orange-gradient">{menu.title}</h1>
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
      {menu.ingredients && (
        <div className="rounded flex font-title bg-red-100 mt-12 text-left text-sm p-2 items-center">
          <div className="rounded mx-auto bg-red-50 mr-2 p-2">
            <Wheat24 />
          </div>
          <p>
            <span className="font-bold">Attention:</span> for allergens, including cereals containing gluten, see ingredients <a href="#ingredients" className="font-bold hover:underline">below</a>.
          </p>
        </div>
      )}
      <div className="flex mt-12 text-xs w-full animate sm:text-base" style={setAnim({ d: '100ms' })}>
        <div className="pr-1 w-1/2">
          <Quantity value={quantity} onChange={setQuantity} />
        </div>
        <div className="pl-1 w-1/2">
          <button
            className="rounded-full flex font-bold font-title border-2 border-x-gray-900 text-center w-full py-2 px-4 duration-200 snipcart-add-item justify-center items-center hover:text-white hover:bg-x-gray-900"
            data-item-quantity={quantity}
            data-item-id={menu.slug}
            data-item-price={menu.price}
            data-item-url={`/menu/${menu.slug}`}
            data-item-description={menu.category.name}
            data-item-image={menu.images[0].responsiveImage.src}
            data-item-name={menu.title}
          >
            To cart
            <ShoppingCart16 className="ml-3" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Description
