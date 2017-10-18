import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {getListCategory} from '../actions/categoryAction'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Home extends Component {

  componentDidMount() {
    this.props.getListCategory()
  }

  renderData() {
    if (this.props.isSuccess) {
      return(
        <div className="chat-content">
          <ul>
            {this.props.categories.data.map((item) => (
              <li className="chat-item" key={item._id}>
                <Link to={"/category/view/"+item._id}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }

  render() {
    if (this.props.hasError) {
      return (
        <div>
          <p>Sorry, There was an error loading the data</p>
        </div>
      )
    }

    if (this.props.isLoading) {
      return (
        <div>
          <p>Loading ..... </p>
        </div>
      )
    }

    return(
      <div>
        {this.renderData()}
      </div>
    )
  }
}

Home.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    isSuccess: state.categories.categoryListSuccess,
    hasError: state.categories.categoryListError,
    isLoading: state.categories.categoryListLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListCategory: () => dispatch(getListCategory())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
