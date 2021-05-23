import Page, { PageProps } from '@/components/page'
import Hero, { HeroProps } from './hero'
import Dishes, { DisheshProps } from './dishes'

export type IndexProps = PageProps & HeroProps & DisheshProps

const Index = (data: IndexProps) => (
  <Page {...data}>
    <Hero {...data} />
    <Dishes {...data} />
  </Page>
)

export default Index
