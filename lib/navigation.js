export default function Navigation(data) {
  return [
    {
      titulo: 'Home',
      href: '/',
    },
    {
      titulo: 'Menu',
      childrens: [
        {
          titulo: 'Everything',
          href: '/menu',
        },
      ]
    },
    {
      titulo: 'Info',
      childrens: [
        {
          titulo: 'About us',
          href: '/about',
        },
        {
          titulo: 'Make an appointment',
          href: '/#appointment',
        },
      ]
    },
  ]
}
