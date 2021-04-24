import Image from 'next/image'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'
import Forms from './forms.svg'

const Hero = () => (
  <div className="relative">
    <Viewport className="bottom-0 animate w-3/10 absolute sm:w-2/10 lg:w-1/10" style={setAnim({x: '-1rem', y: '1rem'})}>
      <div className="mb-8 ml-8 w-full" style={{ transform: 'scaleX(-1)' }}>
        <Forms className="h-auto w-full" viewBox="0 0 640 640" />
      </div>
    </Viewport>
    <div className="flex min-h-screen py-32 c">
      <div className="flex flex-wrap-reverse my-auto w-full items-center sm:flex-wrap">
        <div className="w-full sm:w-1/2">
          <Viewport
            className="bg-clip-text bg-gradient-to-br font-bold font-title from-yellow-300 via-blue-300 to-red-500 text-transparent animate text-4xl inline-block xl:text-6xl"
            style={setAnim({ x: '-1rem' })}
          >
            Arepa
            <br />
            Venezuelan Kitchen
          </Viewport>
        </div>
        <Viewport
          className="flex mb-16 w-full animate justify-center sm:w-1/2 lg:mb-0 lg:justify-end"
          style={setAnim({ x: '1rem', y: '1rem' })}
        >
          <div className="flex bg-blue-300 rounded-[50%] w-7/10 items-center justify-center lg:h-80 lg:w-80">
            <Parallax negative className="p-4">
              <Image
                src="/images/arepa.png"
                alt=""
                width={481}
                height={481}
                objectFit="contain"
                layout="intrinsic"
              />
            </Parallax>
          </div>
        </Viewport>
      </div>
    </div>
  </div>
)

export default Hero
