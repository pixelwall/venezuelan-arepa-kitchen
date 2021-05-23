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
        ...data?.menuCategories?.filter((c) => c.public)?.map((c) => ({
          titulo: c.name,
          href: `/menu?category=${c.slug}`,
        }))
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
          titulo: 'Make a reservation',
          href: '/#reservation',
        },
      ]
    },
  ]
}
