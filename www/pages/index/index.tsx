import Page, { PageProps } from '@/components/page'
import Hero from './hero'

interface IndexProps extends
PageProps {
}

const Index = (data: IndexProps) => (
  <>
    <Page {...data}>
      <Hero/>
      <div className="h-screen"></div>
    </Page>
  </>
)

export default Index
