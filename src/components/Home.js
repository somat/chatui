import React, {Component} from 'react'
import {getListChat} from '../actions/chatAction'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Home extends Component {

  componentDidMount() {
    this.props.getListChat()
  }

  renderData() {
    if (this.props.isSuccess) {
      return(
        <div className="chat-content">
          {this.props.chats.data.map((item) => (
            <div className="row chat-item" key={item._id}>
              <div className="col-md-6 col-xs-6">
                {item.enc}
              </div>
              <div className="col-md-6 col-xs-6">
                {item.dec}
              </div>
            </div>
          ))}
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
    chats: state.chats.chats,
    isSuccess: state.chats.chatListSuccess,
    hasError: state.chats.chatListError,
    isLoading: state.chats.chatListLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListChat: () => dispatch(getListChat())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
