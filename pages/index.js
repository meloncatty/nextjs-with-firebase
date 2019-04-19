import React, { PureComponent } from 'react'
import Products from '../components/products'
import { connect } from 'react-redux'
import { getLoadedFirebaseStore } from '../src/actions'

class Index extends PureComponent {
  componentDidMount() {
    this.props.getLoadedFirebaseStore()
  }

  render () {
    const { pageContext, food } = this.props
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
          }}
      >
        <Products food={food} pageContext={pageContext}  />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    food: state.food
  }
}

const mapDispatchToProps = dispatch => ({
  getLoadedFirebaseStore: () => dispatch(getLoadedFirebaseStore())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
