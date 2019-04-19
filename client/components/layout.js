import GlobalStyles from './global'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import { Home } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const Layout = props => (
  <div className={props.classes.layoutWrapper}>
    <GlobalStyles />
    <AppBar position='static'>
      <Toolbar>
        <h1
          className={props.classes.appBarHeader}
        >
          Studio Ghibli Food
        </h1>
        {
          <Button>
            <Link href='/'>
              <Home />
            </Link>
          </Button>
        }
      </Toolbar>
    </AppBar>
    { props.children }
    <BottomNavigation>
      <p className={props.classes.footerText}>
        SEO-friendly Next.js SPA with a <a href='https://snipcart.com/'>Snipcart</a> powered store.
      </p>
    </BottomNavigation>
  </div>
)

const styles = theme => ({
  layoutWrapper: {
    flexGrow: 1
  },
  footerText: {
    textAlign: 'center'
  },
  appBarHeader: {
    flexGrow: 1,
    margin: 0,
    fontFamily: "'Fredoka One', cursive",
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3em'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2em'
    }
  }
})

export default withStyles(styles)(Layout)
