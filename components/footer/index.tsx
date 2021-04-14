import Link from 'next/link'
import navs from '@/lib/navigation'
import styles from './footer.module.css'
import { Fragment, useState } from 'react'
import {useGlobalDataContext} from '../page'
import Viewport, {setAnim} from '../viewport'
import Image from 'next/image'
import { LogoFacebook32 } from '@carbon/icons-react'
import { LogoInstagram32 } from '@carbon/icons-react'

const MadeBy = () => (
  <div className={styles['madeBy']}>
    <p>Developed in 🇻🇪 🇺🇸 with ❤️ by <strong>Pixelwall Marketing</strong></p>
  </div>
)

const Marketing = () => (
  <div className={styles['el']}>
    <Image
      src="/images/logo-black.png"
      alt="Home"
      title="Home"
      width={128}
      height={128}
      layout="fixed"
    />
    <div className="mt-6">
      <p className={styles['paragraph']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="flex mt-6 items-center">
      <p className={styles['title']}>Follow us</p>
      <div className="flex -mx-2 pl-4 text-kmb-gray-300 items-center">
        <a
          href="#"
          className="px-2 duration-200 hover:text-black"
        >
          <LogoFacebook32 />
        </a>
        <a
          href="#"
          className="px-2 duration-200 hover:text-black"
        >
          <LogoInstagram32 />
        </a>
      </div>
    </div>
  </div>
)

const IsOpen = () => {
  const schedule = {
    init: 1,
    to: 5,

  }
  const [isOpen, setStatus] = useState(true)
  return (
    <span className={`rounded ${isOpen ? 'bg-green-500' : 'bg-red-500'} mx-1 text-sm text-white p-1`}>
      {isOpen ? 'Open' : 'Closed'}
    </span>
  )
}

const Information = () => (
  <div className="flex flex-col">
    <div className={styles['el-alt']}>
      <p className={styles['title']}>Location</p>
      <p className={styles['paragraph']}>
        Guiri Guire, Juan Griego, junto a la casa de Yeya.
      </p>
    </div>
    <div className={styles['el-alt']}>
      <p className={styles['title']}>Schedule</p>
      <p className={styles['paragraph']}>
        24/7 <IsOpen/>
      </p>
    </div>
    <div className={styles['el-alt']}>
      <p className={styles['title']}>Phone</p>
      <div className={styles['links']}>
        <a href="tel:+12345678">+12345678</a>
      </div>
    </div>
  </div>
)

const Section = ({ titulo, childrens }: {
  titulo: string,
  childrens?: { titulo: string, href: string }[]
}) => (
  <div className={styles['el']}>
    <p className={styles['title']}>{titulo}</p>
    <div className={styles['links']}>
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
    <Marketing/>
    <Information/>
    <Isolated/>
    <Childrens/>
  </div>
)

const Footer = () => (
  <footer className="p pb-6 text-kmb-gray-500 content-lg t-16 lg:pb-12">
    <Viewport className="animate" oneWay style={setAnim({y: '0.5rem'})}>
      <Elements/>
      <MadeBy/>
    </Viewport>
  </footer>
)

export default Footer
