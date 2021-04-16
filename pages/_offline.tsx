import { getGlobalData } from '@/lib/datocms'
import Page, { PageProps } from '@/components/page'

const Page404 = (props: PageProps) => (
  <Page {...props} title="You're offline">
    <div className="text-center w-full py-16">
      <h1 className="font-bold font-title mb-4 text-8xl">
        <span className="text-yellow-300">You </span>
        <span className="text-blue-300">are </span>
        <span className="text-red-300">offline</span>
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
