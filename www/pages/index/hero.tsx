import V, { setAnim } from '@/components/viewport'
import Image from 'next/image'
import Parallax from '@/components/parallax'

const Hero = () => (
  <div className="flex min-h-screen py-32 content">
    <div className="flex flex-wrap-reverse my-auto w-full items-center sm:flex-wrap">
      <div className="w-full sm:w-1/2">
        <V
          className="bg-clip-text bg-gradient-to-br font-bold font-title from-yellow-300 via-blue-300 to-red-500 text-transparent animate text-4xl inline-block xl:text-6xl"
          style={setAnim({ x: '-1rem' })}
        >
          Arepa
          <br/>
          Venezuelan Kitchen
        </V>
      </div>
      <V
        className="flex mb-16 w-full animate justify-center sm:w-1/2 lg:mb-0 lg:justify-end"
        style={setAnim({x: '1rem', y: '1rem'})}
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
      </V>
    </div>
  </div>
)

export default Hero
