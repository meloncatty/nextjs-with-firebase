import { SheetsRegistry } from 'jss'
import {
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[200],
      dark: teal[400]
    },
    secondary: {
      main: teal[500],
      light: teal[300]
    },
    type: 'light'
  },
  typography: {
    useNextVariants: true
  }
})

const createPageContext = () => {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  }
}

let pageContext

const getPageContext = () => {
  if (!process.browser) {
    return createPageContext()
  }

  if (!pageContext) {
    pageContext = createPageContext()
  }

  return pageContext
}

export default getPageContext
