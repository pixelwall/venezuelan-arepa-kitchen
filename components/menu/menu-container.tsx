import { Product } from '@/lib/models/product'
import { MenuCard } from './menu-card'

export type MenuContainerProps = {
  menu?: Product[]
}

export const MenuContainer = ({ menu }: MenuContainerProps) => (
  <div className="w-full grid py-24 gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    {menu.map((m, idx) => (
      <MenuCard {...m} key={idx} />
    ))}
  </div>
)
