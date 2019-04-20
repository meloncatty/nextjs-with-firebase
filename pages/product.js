import React from 'react'
import { connect } from 'react-redux'
import ProductComp from '../components/product'
import Head from 'next/head'

class Product extends React.Component {
  static async getInitialProps({ query }) {
    return { id: query.id }
  }

  getProduct() {
    return this.props.food.filter(foodItem => foodItem.id == this.props.id)[0]
  }
    
  render() {
    return (
      <div style={{ display: 'flex', minHeight: '75vh' }}>
        <Head>
          <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
          <script src='https://cdn.snipcart.com/scripts/2.0/snipcart.js'  data-api-key='YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0'  id='snipcart'></script>
          <link  href='https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'  rel='stylesheet'  type='text/css' />
          <meta name='title' content={'Studio Ghibli\'s ' + this.getProduct().name} />
          <meta name='description' content={this.getProduct().description}  />
        </Head>
        <ProductComp {...(this.getProduct())} { ...this.props } />
      </div>
    )
  }
}

const mapStateToProps = state => 
    ({ food: state.food })

export default connect(mapStateToProps)(Product)
