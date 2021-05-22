import { responsiveImageHelper } from '../datocms'
import { ResponsiveImage } from './cms'

export const productBaseFields = `
  title
  slug
  category {
    name
    slug
  }
  price
`

export const productCardFields = `
  ${productBaseFields}
  images {
      ${responsiveImageHelper({ w: 480, h: 300, fit: 'crop' })}
  }
`

export interface Product {
  title?: string
  slug?: string
  category?: {
    name?: string
    slug?: string
  }
  thumbnails?: ResponsiveImage[]
  images?: ResponsiveImage[]
  price: number
  description?: string
}
