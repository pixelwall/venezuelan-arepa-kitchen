import { MenuContainer, MenuContainerProps } from '@/components/menu/menu-container'
import { Star32 } from '@carbon/icons-react'

export type DisheshProps = MenuContainerProps

const Dishes = (data: DisheshProps) => (
  <div className="c-lg">
    <Star32
      className="mx-auto mb-6 animate"
      width={64}
      height={64}
    />
    <h2 className="font-handwritten text-center t-h1">Some of our <span className="px-1 orange-gradient">dishes</span></h2>
    <MenuContainer {...data} />
  </div>
)

export default Dishes
