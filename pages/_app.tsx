import '@/styles/app.css'
import '@/styles/icons.css'
import '@/styles/snipcart.css'
import Snipcart from '@/components/snipcart'

import type { AppProps } from 'next/app'
import Meta from '@/components/meta'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
      <div className="fixed" style={{zIndex: 999}}>
        <Snipcart />
      </div>
    </>
  )
}

export default App
