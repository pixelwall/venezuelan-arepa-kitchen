import { useGlobalDataContext } from '@/components/page'
import Viewport, { setAnim } from '@/components/viewport'
import { ResponsiveImage } from '@/lib/models/cms'
import Link from 'next/link'
import { Image } from 'react-datocms'
import { Fire32, Restaurant32 } from '@carbon/icons-react'

type CategoryProps = {
  name?: string
  slug?: string
  description?: string
  image?: ResponsiveImage
}

const Category = ({
  name,
  slug,
  image,
  description,
  reversed = true,
}: CategoryProps & {
  reversed?: boolean
}) => (
  <Viewport
    className={`flex flex-col-reverse ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} m-[-32px] md:items-center`}
    oneWay
    style={setAnim({ y: '0.5rem' })}
  >
    <div className="w-full p-[32px] animate md:w-[50%]">
      <Image
        data={{
          ...image.responsiveImage,
          alt: name,
        }}
      />
    </div>
    <div className="text-center w-full p-[32px] md:w-[50%]">
      <Restaurant32
        className="mx-auto mb-6 animate"
        width={64}
        height={64}
        style={setAnim({ d: '200ms' })}
      />
      <h3
        className="font-title text-center mb-6 animate t-h1"
        style={setAnim({ d: '200ms' })}
      >
        {name}
      </h3>
      <div
        className="mb-6 animate"
        style={setAnim({ d: '400ms' })}
        dangerouslySetInnerHTML={{__html: description}}
      />
      <div
        className="animate"
        style={setAnim({ d: '600ms' })}
      >
        <Link href={`/menu?category=${slug}`}>
          <a
            className="rounded-full font-bold font-title border-2 border-x-gray-900 py-2 px-4 duration-200 items-center inline-flex hover:text-white hover:bg-x-gray-900"
          >
            Taste our {name.toLowerCase()}
          </a>
        </Link>
      </div>
    </div>
  </Viewport>
)

const Categories = () => {
  const categories: CategoryProps[] = useGlobalDataContext().menuCategories?.filter((c) => c.public)
  return (
    <div className="flex flex-col py-24 c-lg">
      <Viewport
        className="text-center mb-12 w-full"
        style={setAnim({ y: '0.5rem' })}
        oneWay
      >
        <Fire32
          className="mx-auto mb-6 animate"
          width={64}
          height={64}
          style={setAnim({ d: '100ms' })}
        />
        <h2
          className="font-title text-center mb-6 animate t-h1"
          style={setAnim({ d: '200ms' })}
        >
          Taste our <span className="bg-gradient-to-r bg-clip-text from-[#fb923c] to-[#ea580c] text-transparent">caribbean</span> menu
        </h2>
      </Viewport>
      <div className="flex-col flex space-y-8 w-full">
        {categories.map((c, idx) => (
          <Category {...c} reversed={idx % 2 == 0} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Categories
