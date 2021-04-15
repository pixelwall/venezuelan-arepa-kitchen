import '@/styles/app.css'
import '@/styles/icons.css'
import Snipcart from '@/components/snipcart'

import type { AppProps } from 'next/app'
// import { ThemeProvider } from 'next-themes'
import Meta from '@/components/meta'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // <ThemeProvider
    //   attribute='class'
    //   defaultTheme='system'
    //   disableTransitionOnChange
    // >
    //   <Meta />
    //   <Component {...pageProps} />
    // </ThemeProvider>
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
