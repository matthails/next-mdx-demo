import '../styles/globals.css'
import {MDXProvider} from '@mdx-js/react'

import CustomLink from '../components/CustomLink'

const components = {
  a: CustomLink,
} 


function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
      </MDXProvider>
  )
}

export default MyApp
