import Viewport, { setAnim } from '@/components/viewport'
import { ResponsiveImage } from '@/lib/models/cms'
import Link from 'next/link'
import { Image } from 'react-datocms'
import { Corn32 } from '@carbon/icons-react'

export interface AboutProps {
  aboutTitle?: string
  aboutDescription?: string
  aboutImage?: ResponsiveImage
}

const About = ({
  aboutTitle,
  aboutDescription,
  aboutImage,
}: AboutProps) => (
  <div className="py-24 c-lg">
    <Viewport className="flex flex-col-reverse m-[-32px] md:flex-row md:items-center" oneWay style={setAnim({ y: '0.5rem' })}>
      <div className="w-full p-[32px] animate md:w-[50%]">
        <Image
          data={{
            ...aboutImage.responsiveImage,
            alt: 'We are tradition',
          }}
        />
      </div>
      <div className="w-full p-[32px] md:w-[50%]">
        <div className="text-center w-full">
          <Corn32
            className="mx-auto mb-6 animate"
            width={64}
            height={64}
            style={setAnim({ d: '200ms' })}
          />
          <h2
            className="font-title mb-6 animate t-h1 font-handwritten"
            style={setAnim({ d: '200ms' })}
          >
            {aboutTitle}
          </h2>
          <div
            className="mb-6 animate"
            style={setAnim({ d: '400ms' })}
            dangerouslySetInnerHTML={{ __html: aboutDescription }}
          />
          <div
            className="animate"
            style={setAnim({ d: '600ms' })}
          >
            <Link href="/about">
              <a
                className="rounded-full font-bold font-title border-2 border-x-gray-900 py-2 px-4 duration-200 items-center inline-flex hover:bg-x-gray-900 hover:text-white"
              >
                Learn more about us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Viewport>
  </div>
)

export default About