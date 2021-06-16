import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
import { Product, productDetailedFields } from '@/lib/models/product'
import { GetStaticPaths } from 'next'
export { default } from '@/www/pages/menu/[slug]'

const query = `
query MenuSlugQuery($slug: String) {
  menuPage {
    heroBg {
      ${responsiveImageHelper({ w: 700, q: 60 })}
    }
    text
  }
  menu(filter: {slug: {eq: $slug}}) {
    ${productDetailedFields}
  }
}
`

export const getStaticProps = async ({ params }: any) => {
  const { slug } = params
  const globalData = await getGlobalData()
  const { menuPage, menu } = await request({ query, variables: {
    slug
  }})
  return {
    props: {
      ...menuPage,
      menu,
      globalData,
    },
    revalidate: 1,
  }
}

const paths_query = `
query PathsQuery {
  allMenus {
    slug
  }
}
`

export const getStaticPaths: GetStaticPaths = async () => {
  const { allMenus } = await request({ query: paths_query })
  return {
    paths: allMenus.map(({ slug }: Product) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  }
}
