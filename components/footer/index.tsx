import Link from 'next/link'
import navs from '@/lib/navigation'
import styles from './footer.module.css'
import { Fragment } from 'react'
import {useGlobalDataContext} from '../page'
import Viewport, {setAnim} from '../viewport'

const MadeBy = () => (
  <div className={styles['madeBy']}>
    <p>Developed with ❤️ by <strong>Pixelwall Marketing</strong></p>
  </div>
)

const Section = ({ titulo, childrens }: {
  titulo: string,
  childrens?: { titulo: string, href: string }[]
}) => (
  <div className={styles['el']}>
    <p>{titulo}</p>
    <div>
      {childrens.map((n, i) => (
        <Link href={n.href} key={i}>
          <a>{n.titulo}</a>
        </Link>
      ))}
    </div>
  </div>
)

const Isolated = () => {
  const data = useGlobalDataContext()
  const isolated = navs(data).filter(e => !e.childrens)
  return (
    <>{isolated.length > 0 ? (
      <Section titulo="Menu" childrens={isolated as any[]}/>
    ) : null}</>
  )
}

const Childrens = () => {
  const data = useGlobalDataContext()
  const childrens = navs(data).filter(e => e.childrens)
  return (
    <>{childrens.map((n, i) => (
      <Fragment key={i}>
        <Section {...n}/>
      </Fragment>
    ))}</>
  )
}

const Elements = () => (
  <div className={styles['elements']}>
    <Isolated/>
    <Childrens/>
  </div>
)

const Footer = () => (
  <footer className="pt-16 pb-12 content-lg">
    <Viewport className="animate" oneWay style={setAnim({y: '0.5rem'})}>
      <Elements/>
      <MadeBy/>
    </Viewport>
  </footer>
)

export default Footer
