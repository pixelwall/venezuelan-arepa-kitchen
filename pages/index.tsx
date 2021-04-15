import { getGlobalData } from '@/lib/datocms'
export { default,  } from '@/www/pages/index'

export const getStaticProps = async () => {
  const globalData = await getGlobalData()
  return {
    props: {
      globalData
    }
  }
}
