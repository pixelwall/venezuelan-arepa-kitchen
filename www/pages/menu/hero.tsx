import { ReactNode } from 'react'
import { ResponsiveImage } from '@/lib/models/cms'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'
import Img from 'next/image'

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
}

const Hero = ({ heroBg }: HeroProps) => (
  <Background image={heroBg}>
    <div className="text-white py-36 c-lg">
      <Viewport className="flex flex-col space-y-6 text-center" style={setAnim({y: '0.5rem'})}>
        <div
          className="w-full animate"
          style={setAnim({ d: '200ms' })}
        >
          <Img
            src="/images/logo.png"
            width="128"
            height="128"
            objectFit="contain"
            layout="intrinsic"
          />
        </div>
        <h2 className="font-handwritten animate text-6xl">Our menu</h2>
      </Viewport>
    </div>
  </Background>
)

export default Hero
