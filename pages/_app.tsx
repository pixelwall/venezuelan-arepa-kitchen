import { SnipcartContext } from '@/components/snipcart'
import '@/styles/app.css'
import '@/styles/icons.css'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SnipcartContext>
      <Component {...pageProps} />
    </SnipcartContext>
  )
}

export default App
