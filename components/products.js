import Link from 'next/link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import { Link as MaterialLink } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const ProductLink = props => (
  <Card className={props.classes.cardStyle}>
    <Link
      as={`/product/${props.id}`} href={`/product?id=${props.id}`} 
    >
      <a className={props.classes.linkStyle}>
        <CardMedia
          image={props.image}
          title={props.name}
          className={props.classes.cardMedia}
        />
        <MaterialLink underline='none' color='inherit'>
          <CardContent variant='h5' component='h2'>
              { props.name }
          </CardContent>
        </MaterialLink>
      </a>
    </Link>
  </Card>
)

const Products = ({ food, pageContext, classes }) => (
  <Grid container className={classes.gridContainer}>
      <Grid item md={12}>
        <Grid container className='food-list' justify='center' spacing={24}>
          { food.map(foodItem => (
              <Grid item key={foodItem.name}>
                <ProductLink key={ foodItem.id } { ...foodItem } { ...pageContext } classes={classes} />
              </Grid>
            ))
          }
        </Grid>
      </Grid>
  </Grid>
)

const styles = theme => ({
  linkStyle: {
    color: `${theme.palette.primary.contrastText}`,
    textDecoration: 'none'
  },
  cardMedia: {
    height: 215,
    backgroundPosition: '-2% bottom'
  },
  gridContainer: {
    padding: 20
  },
  cardStyle: {
    width: 225,
    margin: 15,
    padding: 5 
  }
})

export default withStyles(styles)(Products)
