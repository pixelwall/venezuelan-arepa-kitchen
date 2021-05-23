import { ReactNode } from 'react'
import { ResponsiveImage } from '@/lib/models/cms'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'
import Img from 'next/image'
import { Wheat24 } from '@carbon/icons-react'

const Background = ({ image, children }: { image?: ResponsiveImage, children?: ReactNode }) => (
  <div className="mb-16 w-full relative overflow-hidden">
    <Parallax className="h-[130%] w-full -z-10 absolute" scaleFactor={10}>
      <Image
        data={{ ...image?.responsiveImage }}
        style={{
          width: '100%',
          height: '100%',
        }}
        pictureStyle={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          userSelect: 'none',
          objectFit: 'cover',
        }}
      />
    </Parallax>
    <div className="bg-black h-full bg-opacity-50 w-full transform">
      {children}
    </div>
  </div>
)

export interface HeroProps {
  heroBg?: ResponsiveImage
  text?: string
}

const Hero = ({ heroBg, text }: HeroProps) => (
  <Background image={heroBg}>
    <div className="py-24 c-lg sm:py-36">
      <Viewport className="flex flex-wrap-reverse w-full items-center" style={setAnim({ y: '0.5rem' })}>
        <div className="w-full sm:w-1/2">
          <div className="relative">
            <div
              className="h-full w-full animate z-10 absolute"
              style={{ aspectRatio: '1/1', ...setAnim({ x: '-1.5rem', y: '-1.5rem', d: '0.4s' }) }}
            >
              <div className="rounded-xl h-full w-full transform translate-x-6 translate-y-6 polka" />
            </div>
            <div className="bg-white rounded-xl text-center w-full p-8 animate z-20 relative">
              <h2 className="font-handwritten mb-6 text-4xl orange-gradient sm:text-6xl">Our menu</h2>
              <div dangerouslySetInnerHTML={{ __html: text }} />
              <div className="rounded flex font-title bg-red-100 mt-4 text-left text-sm p-2 items-center">
                <div className="rounded mx-auto bg-red-50 mr-2 p-2">
                  <Wheat24 />
                </div>
                <p>
                  <span className="font-bold">Attention:</span> for allergens, including cereals containing gluten, see ingredients in the product details page.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full px-16 pb-12 animate justify-center sm:w-1/2 sm:pb-0 sm:px-0" style={setAnim({ d: '0.2s' })}>
          <div className="relative">
            <div
              className="h-full w-full animate z-10 absolute"
              style={{ aspectRatio: '1/1', ...setAnim({ x: '-1.5rem', y: '-1.5rem', d: '0.6s' }) }}
            >
              <div className="h-full rounded-[50%] w-full transform translate-x-6 translate-y-6 polka" />
            </div>
            <div className="z-20 relative">
              <Img
                src="/images/logo.png"
                width="256"
                height="256"
                className="relative"
                objectFit="contain"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </Viewport>
    </div>
  </Background>
)

export default Hero
