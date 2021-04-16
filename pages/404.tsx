import { getGlobalData } from '@/lib/datocms'
import Page, { PageProps } from '@/components/page'

const Page404 = (props: PageProps) => (
  <Page {...props} title="404: This page could not be found">
    <div className="w-full py-16 text-center">
      <h1 className="mb-4 font-bold font-title text-8xl">
        404
      </h1>
      <p>This page could not be found</p>
    </div>
  </Page>
)

export async function getStaticProps() {
  const globalData = await getGlobalData()
  return {
    props: {
      globalData
    }
  }
}

export default Page404
