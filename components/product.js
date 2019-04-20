import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const ProductWrapper = props => (
  <Grid container justify='center' align='center' className={props.classes.gridContainer}>
    <Grid item>
      <a href={ props.url }>
        <img src={ '../' + props.image } alt={props.name+'.'} className={props.classes.productImage} />
        <h2 className={props.classes.itemName}>{props.name}</h2>
      </a>
      <p className={props.classes.itemDescription}>
        { props.description }
      </p>
      <Button 
        variant='contained'
        color='primary'
        className={props.classes.addToCartButton}
        data-item-name={ props.name }
        data-item-id={ props.id }
        data-item-image={ '../' + props.image }
        data-item-url={ props.image }
        data-item-price={ props.price }
      >
          Add to cart
      </Button>
    </Grid>
  </Grid>
)

const styles = theme => ({
  addToCartButton: {
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  itemDescription: {
    fontSize: 20,
    color: `${theme.palette.primary.contrastText}`
  },
  itemName: {
    margin: 10,
    color: `${theme.palette.primary.contrastText}`
  },
  gridContainer: {
    padding: 25
  },
  productImage: {
    [theme.breakpoints.down('sm')]: {
      height: '145px'
    },
    [theme.breakpoints.up('md')]: {
      height: '400px'
    }
  }
})

export default withStyles(styles)(ProductWrapper)
