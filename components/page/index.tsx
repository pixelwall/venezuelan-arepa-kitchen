import { ReactNode, useContext, createContext } from 'react'
import { Navbar, Footer } from './navigation'
import OgImage, { OgImageProps } from './og-image'
import SeoTags, { SeoTagsProps } from './seo-tags'
import { GoogleFonts } from '@/components/google-fonts'
import Favicons from './favicons'

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
}: PageProps) => (
  <globalDataContext.Provider value={globalData}>
    <GoogleFonts
      families={[
        'Pattaya',
        'Titillium+Web:wght@300;400;700',
        'Lato:wght@300;400;700;900',
      ]}
      display="swap"
    />

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
      <main
        className="flex-grow w-full overflow-hidden"
        style={{ paddingTop: `${padded ? 96 : 0}px` }}
      >
        {children}
      </main>
      {footer && <Footer />}
    </div>
  </globalDataContext.Provider>
)

export default Page
