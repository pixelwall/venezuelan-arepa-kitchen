import { responsiveImageFragment } from '@/lib/datocms'
export { default,  } from '@/www/pages/index'

const query = `
query InicioQuery {
}

${responsiveImageFragment}
`

export const getStaticProps = async () => {
  // const globalData = await getGlobalData()
  return {
    props: {
      // ...inicio,
      // Camaras: allCamaras,
      // Equipo: allIntegrantes,
      // LineasEstrategicas: allLineaEstrategicas,
      // Albums: allAlbums,
      // Noticias: allNoticiaEntradas,
      // GlobalData,
    }
  }
}
