import type { AppProps } from 'next/app'
import { Layout } from 'features'
import { Provider } from 'react-redux'
import { store } from 'store'
import '../src/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
