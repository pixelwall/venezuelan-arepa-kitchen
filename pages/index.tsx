import { getGlobalData } from '@/lib/datocms'
import { IndexProps } from '@/www/pages/index'
import { GetStaticPropsResult } from 'next'
export { default,  } from '@/www/pages/index'

export const getStaticProps = async (): Promise<GetStaticPropsResult<IndexProps>> => {
  const globalData = await getGlobalData()
  return {
    props: {
      globalData
    }
  }
}
