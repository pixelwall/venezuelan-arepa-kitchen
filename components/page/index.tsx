import { ReactNode, useContext, createContext } from 'react'
import { Navbar, Footer } from './navigation'
import OgImage, { OgImageProps } from './og-image'
import SeoTags, { SeoTagsProps } from './seo-tags'
import Favicons from './favicons'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export type GetLayoutProps<T = any> = (props: T) => PageProps

export interface PageProps extends OgImageProps, SeoTagsProps {
  padded?: boolean
  navbar?: boolean
  footer?: boolean
  globalData?: any
  children?: ReactNode
}

export const globalDataContext = createContext<any>(null)
export const useGlobalDataContext = () => useContext(globalDataContext)

const brand = 'Arepa Venezuelan Kitchen'

const Page = ({
  padded = true,
  navbar = true,
  footer = true,
  title,
  brandTitle,
  description,
  children,
  globalData,
  ...rest
}: PageProps) => {
  const router = useRouter()
  return (
    <globalDataContext.Provider value={globalData}>
      <SeoTags
        title={title}
        brandTitle={brandTitle || brand}
        description={description || (globalData?.SEODescription || brand)}
      />

      <OgImage {...rest} />

      <Favicons />

      <style global jsx>
        {` html { scroll-behavior: smooth; }`}
      </style>

      <div className="flex flex-col min-h-screen w-full">
        {navbar && <Navbar />}
        <motion.main
          animate="enter"
          exit="exit"
          initial="initial"
          key={router.route}
          style={{ paddingTop: `${padded ? 96 : 0}px` }}
          className="flex-grow w-full overflow-hidden"
          variants={{
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          {children}
        </motion.main>
        {footer && <Footer />}
      </div>
    </globalDataContext.Provider>
  )
}

export default Page
