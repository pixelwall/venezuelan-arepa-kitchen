export default function Navigation(data) {
  return [
    {
      titulo: 'Home',
      href: '/',
    },
    {
      titulo: 'Page 1',
      href: '/page1',
    },
    {
      titulo: 'Submenu 1',
      childrens: new Array(4).fill()?.map((_, i) => ({
        titulo: `Page ${i + 1}`,
        href: `/page${i + 1}`,
      }))
    },
    {
      titulo: 'Submenu 2',
      childrens: new Array(4).fill()?.map((_, i) => ({
        titulo: `Page ${i + 1}`,
        href: `/page${i + 1}`,
      }))
    },
    {
      titulo: 'Submenu 3',
      childrens: new Array(4).fill()?.map((_, i) => ({
        titulo: `Page ${i + 1}`,
        href: `/page${i + 1}`,
      }))
    },
  ]
}
