import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import store from '../src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import getPageContext from '../src/lib/getPageContext'
import Layout from '../components/layout'

const _App = withRedux(store)(
  class _App extends App {
    pageContext = getPageContext()

    static async getInitialProps ({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }

    componentDidMount () {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render () {
      const {
        Component,
        pageProps,
        store
      } = this.props

      const persistor = persistStore(store)

      return (
        <Container>
          <Head>
            <title>★Studio Ghibli Food★</title>
          </Head>
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <CssBaseline />
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <Layout { ...pageProps }>
                    <Component
                      pageContext={ this.pageContext }
                      { ...pageProps }
                    />
                  </Layout>
                </PersistGate>
              </Provider>
            </MuiThemeProvider>
          </JssProvider>
        </Container>
      )
    }
  }
)

export default _App
