import { SnipcartContext } from '@/components/snipcart'
import '@/styles/app.css'
import '@/styles/icons.css'
import PageLayout, { GetLayoutProps } from '@/components/page'

import type { AppProps } from 'next/app'
import { useMemo } from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  const layoutProps = useMemo<GetLayoutProps>(() => {
    return (Component as any).getLayoutProps
      ? (Component as any).getLayoutProps(pageProps)
      : (pageProps) => pageProps 
  }, [(Component as any).getLayoutProps, pageProps])
  return (
    <SnipcartContext>
      <PageLayout {...pageProps} {...layoutProps}>
        <Component {...pageProps} />
      </PageLayout>
    </SnipcartContext>
  )
}

export default App
