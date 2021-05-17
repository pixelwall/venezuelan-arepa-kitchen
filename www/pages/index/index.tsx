import Page, { PageProps } from '@/components/page'
import AppointmentForm from '@/www/shared/appointment-form'
import Hero from './hero'
import Intro, { IntroProps } from './intro'
import About, { AboutProps } from './about'
import Categories from './categories'

export type IndexProps = PageProps & IntroProps & AboutProps

const Index = (data: IndexProps) => (
  <Page {...data} padded={false}>
    <Hero />
    <Intro {...data} />
    <Categories />
    <About {...data} />

    <div id="appointment" className="my-24 c-lg">
      <AppointmentForm title />
    </div>
  </Page>
)

export default Index
