import { ResponsiveImage } from './cms'

export interface Product {
  title?: string
  slug?: string
  category?: {
    name?: string
    slug?: string
  }
  images?: ResponsiveImage[]
  description?: string
}
