import { MenuContainer, MenuContainerProps } from '@/components/menu/menu-container'
import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { search } from '@/lib/utils'
import V, { setAnim } from '@/components/viewport'
import { useGlobalDataContext } from '@/components/page'

export type DisheshProps = MenuContainerProps

const Category = () => {
  const { menuCategories }: {
    menuCategories?: {
      slug?: string
      name?: string
    }[]
  } = useGlobalDataContext()
  const { query } = useRouter()
  const resetCategory = () => {
    const queries = { ...query }
    delete queries.category
    return queries
  }
  return (
    <div className="font-title t-p">
      <p className="font-bold font-title mb-4">Select a menu category</p>
      <V className="flex flex-wrap -my-2 -mx-4 text-x-gray-300" style={setAnim({ y: '0.5rem' })} once>
        <Link
          href={{ pathname: '/menu',  query: resetCategory() }}
          scroll={false}
          shallow
					replace
        >
          <a
            className={`px-4 py-2 duration-200 hover:text-black animate ${
              !query.category && 'text-black'
            }`}
          >Everything</a>
        </Link>
        {menuCategories.map((c, i) => (
          <Link
            href={{ pathname: '/menu', query: { ...query, category: c.slug } }}
            scroll={false}
            shallow
						replace
						key={i}
          >
            <a
              className={`px-4 py-2 duration-200 hover:text-black animate ${
                query.category == c.slug && 'text-black'
              }`}
              style={{transitionDelay: `${(i + 1) * 100}ms`}}
            >{c.name}</a>
          </Link>
        ))}
      </V>
    </div>
  )
}

const Dishes = (data: DisheshProps) => {
  const { query } = useRouter()
  const [category, setCategory] = useState(query.category)
  const [searchInput, setSearch] = useState('')
  useEffect(() => {
    setCategory(query.category)
  }, [query])
  const filteredData = useMemo(() => {
    let newData = data.menu
    if (category) {
      newData = newData.filter((v) => v.category.slug == category)
    }

    if (searchInput) {
      newData = search(newData, searchInput, ['name'])
    }
    return newData
  }, [category, searchInput])
  return (
    <div className="c-lg">
      <V className="mb-6 w-full animate">
        <p className="font-title mb-6 t-h2">Search filters</p>
        <input
          className="font-title w-full px-0 input"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Search by a name"
          value={searchInput}
          onChange={(event) => setSearch(event.target.value)}
        />
      </V>
      <div className="flex flex-wrap pb-4">
        <div className="pt-4">
          <Category />
        </div>
      </div>
      {filteredData.length ? (
        <div className="-mt-16 mb-4">
          <MenuContainer menu={filteredData} />
        </div>
      ) : (
        <div
          className="font-handwritten text-center mb-8 w-full py-16 orange-gradient t-h1"
        >
          Oops, nothing here :(
        </div>
      )}
    </div>
  )
}

export default Dishes
