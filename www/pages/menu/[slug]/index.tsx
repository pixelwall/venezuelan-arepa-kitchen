import Page, { PageProps } from '@/components/page'
import { Product } from '@/lib/models/product'
import Link from 'next/link'
import Description from './description'
import { Gallery } from './gallery'

export type MenuSlugProps = PageProps & {
  menu?: Product
}

const MenuSlug: React.FC<MenuSlugProps> = (data) => {
  const { menu } = data
  const thumbnail = menu.thumbnails[0].responsiveImage.src
  return (
    <Page {...data} title={menu.title} image={thumbnail}>
      <div className="mb-6 c-lg">
        <div className="flex font-title text-xs w-full py-6 uppercase">
          <Link href="/menu">
            <a className="font-bold hover:underline">Menu</a>
          </Link>
          <span className="mx-4">/</span>
          <Link href={`/menu?category=${menu.category.slug}`}>
            <a className="font-bold hover:underline">{menu.category.name}</a>
          </Link>
        </div>
        <div className="flex flex-wrap w-full lg:-mx-6">
          <div className="w-full lg:px-6 lg:w-2/3">
            <Gallery images={menu.images} imagesHd={menu.imagesHd} />
          </div>
          <div className="mt-12 w-full lg:mt-0 lg:px-6 lg:w-1/3">
            <Description {...menu} />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default MenuSlug