import Page, { PageProps } from '@/components/page'
import AppointmentForm from '@/www/shared/appointment-form'
import Hero from './hero'
import Intro, { IntroProps } from './intro'
import About, { AboutProps } from './about'
import Categories from './categories'
import Dishes, { DisheshProps } from './dishes'

export type IndexProps = PageProps & IntroProps & AboutProps & DisheshProps

const Index = (data: IndexProps) => (
  <Page {...data} padded={false}>
    <Hero />
    <Intro {...data} />
    <Categories />
    <Dishes {...data} />
    <About {...data} />

    <div id="reservation" className="my-24">
      <AppointmentForm title />
    </div>
  </Page>
)

export default Index
