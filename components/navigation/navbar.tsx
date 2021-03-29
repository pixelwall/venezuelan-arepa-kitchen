import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Hamburger from './hamburguer'
import Sidebar from './sidebar'
import Dropdown from './dropdown'
import s from './styles/navbar.module.css'
import nav from '@/lib/navigation'
import { useGlobalDataContext } from '../page'
import Image from 'next/image'

export default function Navbar() {
  const [ sidebar, setSidebar ] = useState(false)
  const [scrollY, setScrollY] = useState<number>(null)
  const toggleSidebar = () => (setSidebar(!sidebar))
  const globalData = useGlobalDataContext()

  const scrollHander = () => {
    setScrollY(window.scrollY)
    showingHandler()
  }

  const [isShowing, setShowing] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const showingHandler = () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition < 0) {
      return
    }
    // Stop executing this function if the difference between
    // current scroll position and last scroll position is less than some offset
    if (Math.abs(currentScrollPosition - lastScrollPosition) < 128) {
      return
    }
    if (currentScrollPosition > 128) {
      setShowing(currentScrollPosition < lastScrollPosition)
    } else {
      setShowing(true)
    }
    setLastScrollPosition(currentScrollPosition)
  }

  useEffect(() => {
    if (scrollY === null) {
      scrollHander()
    }
    window.addEventListener('scroll', scrollHander, { passive: true })
    return () => (window.removeEventListener('scroll', scrollHander))
  })

  return (
    <header className={`${s.header} duration-500 transform ${!isShowing && '-translate-y-full pointer-events-none'}`}>
      <Sidebar open={sidebar} toggle={toggleSidebar}/>
      <div className={`${s.headerWrapper} border-b ${ scrollY > 0 ? 'border-kmb-gray-100' : 'border-transparent' }`}>
        <div className="flex overflow-hidden pointer-events-auto">
          <Link href="/">
            <a title="Home" className="overflow-hidden text-2xl font-bold text-blue-800 duration-200 font-title transform hover:scale-95">
              <div className="duration-200 transform hover:scale-95 logo">
                <Image
                  src="/images/logo-alt.png"
                  alt="Home"
                  title="Home"
                  width={113}
                  height={70}
                  quality={90}
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={s.elements}>
          <div className="items-center hidden lg:flex duration-200 transition-all">
            {nav(globalData).map((n, i) => n.childrens ? (
              <Fragment key={i}>
                <Dropdown titulo={n.titulo} links={n.childrens}/>
              </Fragment>
            ) : (
              <Link href={n.href || '/'} key={i}>
                <a className="mx-4 font-bold border-transparent border-b-[3px] hover:border-yellow-300 -mt-[3px] duration-200">{n.titulo}</a>
              </Link>
            ))}
          </div>
          <div className="lg:hidden">
            <Hamburger open={sidebar} toggle={toggleSidebar}/>
          </div>
        </div>
      </div>
    </header>
  )
}
