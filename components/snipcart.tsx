import Head from 'next/head'

export const SnipcartHead = () => (
  <Head>
    <link rel="preconnect" href="https://app.snipcart.com" />
    <link rel="preconnect" href="https://cdn.snipcart.com" />
    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.1.0/default/snipcart.css" />
    <script async src="https://cdn.snipcart.com/themes/v3.1.0/default/snipcart.js" />
  </Head>
)

export const SnipcartWrapper = () => (
  <div
    id="snipcart"
    data-config-modal-style="side"
    data-api-key="OTM1ODBiOTAtMDdhYy00NzVmLWJkMGUtYjZmNTgwODVlYTYxNjM3Mzk2ODgxNzczODQxNjUx"
    style={{zIndex: 9999}}
    hidden
  />
)

const Snipcart = () => (
  <>
    <SnipcartHead />
    <SnipcartWrapper />
  </>
)

export default Snipcart
