import { GraphQLClient } from 'graphql-request'

export function request({ query, variables, preview }: {
  query: string
  variables?: any
  preview?: boolean
}): Promise<any> {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`

    const client = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
      },
    })

    return process.env.OFFLINE ? Promise.resolve({}) : client.request(query, variables)
}

const GLOBAL_DATA_QUERY = `
query GlobalDataQuery {
  globalInfo {
    footerDescription
    direction
  }
  contactInfo {
    facebook
    instagram
    phone
  }
}
`

export async function getGlobalData({ preview = false }: { preview?: boolean } = {}): Promise<any> {
  const req = await request({ query: GLOBAL_DATA_QUERY, preview })
  return {
    ...req
  }
}

export const responsiveImageHelper = ({ w, h, fit }: {
  w?: number
  h?: number
  fit?: string
}) => {
  return `responsiveImage(imgixParams: {
    ${w ? `w: ${w},` : ''}
    ${h ? `h: ${h},` : ''}
    ${fit ? `fit: ${fit},` : ''}
    auto: format
  }) {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }`
}

export const responsiveImageFragment = `
fragment responsiveImageFragment on ResponsiveImage {
  srcSet
  webpSrcSet
  sizes
  src
  width
  height
  aspectRatio
  alt
  title
  base64
}
`
