import V, { setAnim } from '@/components/viewport'
import Image from 'next/image'
import Parallax from '@/components/parallax'

const Hero = () => (
  <div className="flex min-h-screen py-32 content">
    <div className="flex flex-wrap-reverse items-center w-full my-auto sm:flex-wrap">
      <div className="w-full sm:w-1/2">
        <V
          className="inline-block text-5xl font-bold text-transparent xl:text-7xl font-title bg-clip-text bg-gradient-to-br from-yellow-300 via-blue-300 to-red-500 animate"
          style={setAnim({ x: '-1rem' })}
        >
          Venezuelan
          <br/>
          Arepa Kitchen
        </V>
      </div>
      <V className="flex justify-center w-full mb-16 lg:justify-end sm:w-1/2 animate lg:mb-0" style={setAnim({x: '1rem', y: '1rem'})}>
        <div className="w-7/10 lg:w-80 lg:h-80 rounded-[50%] bg-blue-300 flex items-center justify-center">
          <Parallax negative className="p-12">
            <Image src="/images/arepita.png" alt="" width={402} height={382} layout="intrinsic"/>
          </Parallax>
        </div>
      </V>
    </div>
  </div>
)

export default Hero
