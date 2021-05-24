import Page, { PageProps } from '@/components/page'
import { ResponsiveImage } from '@/lib/models/cms'
import { Product } from '@/lib/models/product'

export type MenuSlugProps = PageProps & {
  menu?: Product
}

const MenuSlug: React.FC<MenuSlugProps> = (data) => {
  const { menu } = data
  const thumbnail = menu.thumbnails[0].responsiveImage.src
  return (
    <Page {...data} title={menu.title} image={thumbnail}>
    </Page>
  )
}

export default MenuSlug
