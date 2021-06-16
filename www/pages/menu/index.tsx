import Page, { PageProps, GetLayoutProps } from '@/components/page'
import Hero, { HeroProps } from './hero'
import Dishes, { DisheshProps } from './dishes'

export type IndexProps = HeroProps & DisheshProps

const getLayoutProps: GetLayoutProps = () => ({
  title: 'Menu',
})

const Index = (data: IndexProps) => (
  <>
    <Hero {...data} />
    <Dishes {...data} />
  </>
)

Index.getLayoutProps = getLayoutProps

export default Index
