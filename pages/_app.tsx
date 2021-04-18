import '@/styles/app.css'
import '@/styles/icons.css'
import Snipcart from '@/components/snipcart'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Snipcart />
    </>
  )
}

export default App
