import Page from '@/components/page'

const Page404 = (globalData: any) => (
  <Page title="404: This page could not be found" globalData={globalData}>
    <div className="w-full py-16 text-center">
      <h1 className="mb-4 font-bold text-8xl font-title">
        <span className="text-yellow-300">4</span>
        <span className="text-blue-300">0</span>
        <span className="text-red-300">4</span>
      </h1>
      <p>This page could not be found</p>
    </div>
  </Page>
)

export async function getStaticProps() {
  return {
    props: {
    }
  }
}

export default Page404
