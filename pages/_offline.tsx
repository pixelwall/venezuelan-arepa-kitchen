import { getGlobalData } from '@/lib/datocms'
import Page, { PageProps } from '@/components/page'

const Page404 = (props: PageProps) => (
  <Page {...props} title="You're offline">
    <div className="text-center w-full py-16">
      <h1 className="mb-4 font-bold font-title text-5xl">
        You're offline
      </h1>
      <p>Sorry, you're offline and this resource is not cached, try latter :(</p>
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
