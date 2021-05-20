import Image from 'next/image'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'
import Forms from './forms.svg'

const Hero = () => (
  <div className="relative">
    <Viewport className="bottom-0 animate w-3/10 absolute sm:w-2/10 lg:w-1/10" style={setAnim({x: '-1rem', y: '1rem', d: '500ms'})}>
      <div className="mb-8 ml-8 w-full" style={{ transform: 'scaleX(-1)' }}>
        <Forms className="h-auto w-full" viewBox="0 0 640 640" />
      </div>
    </Viewport>
    <div className="flex min-h-screen py-40 c">
      <div className="flex flex-wrap-reverse my-auto w-full items-center sm:flex-wrap">
        <div className="w-full sm:w-1/2">
          <Viewport
            className="font-bold pr-2 font-handwritten animate text-4xl xl:text-6xl flag-gradient"
            style={setAnim({ x: '-1rem', d: '800ms' })}
          >
            Arepa
            <br />
            Venezuelan Kitchen
          </Viewport>
        </div>
        <Viewport
          className="flex mb-16 w-full animate justify-center sm:w-1/2 lg:mb-0 lg:justify-end relative"
          style={setAnim({ x: '1rem', y: '1rem', d: '200ms' })}
        >
          <div
            className="absolute w-7/10 h-full lg:h-80 lg:w-80 -z-10 animate" 
            style={setAnim({ x: '-1.25rem', y: '-1.25rem', d: '0.2s' })}
          >
            <div className="w-full h-full polka transform rounded-[50%]  translate-x-5 translate-y-5"/>
          </div>
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
