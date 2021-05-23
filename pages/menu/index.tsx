import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
import { productCardFields } from '@/lib/models/product'
import { IndexProps } from '@/www/pages/menu'
import { GetStaticPropsResult } from 'next'
export { default, } from '@/www/pages/menu'

const query = `
query MenuQuery {
  menuPage {
    heroBg {
      ${responsiveImageHelper({ w: 700, q: 60 })}
    }
    text
  }
  menu: allMenus {
    ${productCardFields}
  }
}
`

export const getStaticProps = async (): Promise<GetStaticPropsResult<IndexProps>> => {
  const globalData = await getGlobalData()
  const { menuPage, menu } = await request({ query })
  return {
    props: {
      ...menuPage,
      menu,
      globalData,
    }
  }
}
