import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
import { productCardFields } from '@/lib/models/product'
import { IndexProps } from '@/www/pages/index'
import { GetStaticPropsResult } from 'next'
export { default,  } from '@/www/pages/index'

const query = `
query HomepageQuery {
  homepage {
    introTitle
    introDescription
    introBg {
      ${responsiveImageHelper({ w: 700, q: 60 })}
    }
    aboutTitle
    aboutDescription
    aboutImage {
      ${responsiveImageHelper({ w: 500, h: 500, fit: 'crop' })}
    }
  }
  menu: allMenus(first: 4) {
    ${productCardFields}
  }
}
`

export const getStaticProps = async (): Promise<GetStaticPropsResult<IndexProps>> => {
  const globalData = await getGlobalData()
  const { homepage, menu } = await request({ query })
  return {
    props: {
      ...homepage,
      menu,
      globalData,
    }
  }
}
