import Page, { PageProps } from '@/components/page'
import Hero from './hero'

export type IndexProps = PageProps

const Index = (data: IndexProps) => (
  <Page {...data} padded={false}>
    <Hero />
  </Page>
)

export default Index
