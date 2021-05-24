import { ResponsiveImage } from '@/lib/models/cms'
import V, { setAnim } from '@/components/viewport'
import ZoomImage from '@/components/zoom-image'
import { useRef, useState } from 'react'
import { ChevronLeft32, ChevronRight32 } from '@carbon/icons-react'

type GalleryImage = {
  idx?: number
  image?: ResponsiveImage
}

export const Gallery = ({ images, imagesHd }: { images: ResponsiveImage[], imagesHd?: ResponsiveImage[] }) => {
  const [current, setCurrent] = useState<GalleryImage>({
    idx: 0,
    image: images[0],
  })

  const clamp = (number: number, min: number, max: number) =>
    Math.min(Math.max(number, min), max)
  const prev = () => {
    setCurrent((c) => {
      const idx = clamp(c.idx - 1, 0, images.length - 1)
      return {
        idx,
        image: images[idx],
      }
    })
  }
  const next = () => {
    setCurrent((c) => {
      const idx = clamp(c.idx + 1, 0, images.length - 1)
      return {
        idx,
        image: images[idx],
      }
    })
  }

  const Controls = () => (
    <div
      className="flex mt-12 animate text-3xl text-x-gray-800 justify-center items-center"
      style={setAnim({ x: '0', y: '-1rem', d: '400ms' })}
    >
      <button
        className={`flex duration-200 ${current.idx > 0 ? 'hover:text-x-gray-800' : 'cursor-not-allowed text-x-gray-400'}`}
        onClick={prev}
      >
        <ChevronLeft32 />
      </button>
      <p
        className="font-title mx-4 text-center text-base"
        style={{ width: '12ch' }}
      >
        <span className="font-bold">{current.idx + 1}</span> / <span className="font-bold">{images.length}</span>
      </p>
      <button
        className={`flex duration-200 ${current.idx < images.length - 1 ? 'hover:text-x-gray-800' : 'cursor-not-allowed text-x-gray-400'}`}
        onClick={next}
      >
        <ChevronRight32 />
      </button>
    </div>
  )

  return (
    <V className="flex flex-col" style={setAnim({ x: '-1rem' })} once>
      <div className="relative">
        <div
          className="h-full w-full animate -z-10 absolute"
          style={{ aspectRatio: '1/1', ...setAnim({ x: '-1.5rem', y: '-1.5rem', d: '0.2s' }) }}
        >
          <div className="h-full w-full transform translate-x-6 translate-y-6 polka" />
        </div>
        <style jsx>{`
        .wrapper {
          overflow: hidden;
          display: grid;
          align-items: start;
          width: 100%;
          position: relative;
        }
        .wrapper :global(.image) {
          width: 100%;
          height: 100%;
          grid-column: 1/2;
          grid-row: 1/2 relative;
        }
      `}</style>
        <div
          className="animate wrapper"
        >
          {images.map((i, idx) => (
            <div
              className={`
              w-full image duration-500 transform
              ${current.idx != idx && 'scale-105 opacity-0 absolute pointer-events-none'}
             `
              }
              key={idx}
            >
              <ZoomImage data={i.responsiveImage} dataHd={imagesHd ? imagesHd[idx].responsiveImage : null} />
            </div>
          ))}
        </div>
      </div>
      <Controls />
    </V >
  )
}
