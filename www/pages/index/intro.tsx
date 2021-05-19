import { ReactNode } from 'react'
import { ResponsiveImage } from '@/lib/models/cms'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'

const Background = ({ image, children }: { image?: ResponsiveImage, children?: ReactNode }) => (
  <div className="my-16 w-full relative overflow-hidden">
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

export interface IntroProps {
  introTitle?: string
  introDescription?: string
  introBg?: ResponsiveImage
}

const Intro = ({ introTitle, introDescription, introBg }: IntroProps) => (
  <Background image={introBg}>
    <div className="text-center text-white py-36 c">
      <Viewport className="flex flex-col space-y-6" oneWay style={setAnim({s: '1.1'})}>
        <h2 className="animate text-6xl font-handwritten">{introTitle}</h2>
        <div
          className="mx-auto w-full animate lg:w-[70%]"
          style={setAnim({d: '100ms'})}
          dangerouslySetInnerHTML={{ __html: introDescription }}
        />
      </Viewport>
    </div>
  </Background>
)

export default Intro