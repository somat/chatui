import React, {Component} from 'react'
import {Form, Textarea} from 'formsy-react-components';
import {getListChat} from '../actions/chatAction'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      prevCategory: '',
      currentCategory: '',
      canSubmit: false
    }
    this.handleValid = this.handleValid.bind(this)
    this.handleInvalid = this.handleInvalid.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      prevCategory: this.state.currentCategory,
      currentCategory: nextProps.match.params.categoryId
    })
  }

  componentDidMount() {
    this.setState({
      currentCategory: this.props.match.params.categoryId,
      prevCategory: this.props.match.params.categoryId
    })
    this.props.getListChat(this.props.match.params.categoryId)
  }

  componentDidUpdate() {
    if (this.state.currentCategory !== this.state.prevCategory) {
      this.props.getListChat(this.props.match.params.categoryId)
    }
  }

  handleSubmit(data) {
    this.props.companyAdd(data)
  }

  handleValid() {
    this.setState({canSubmit: true})
  }

  handleInvalid() {
    this.setState({canSubmit: false})
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

        <Form
          onValidSubmit={this.handleSubmit}
          layout={"vertical"}
          onValid={this.handleValid}
          onInvalid={this.handleInvalid}>

          <div className="row">
            <div className="col-md-6 col-xs-6">
              <Textarea
                rows={3}
                placeholder="Encoder"
                name="enc"
                label="Encoder"
                required
              />
            </div>
            <div className="col-md-6 col-xs-6">
              <Textarea
                rows={3}
                placeholder="Decoder"
                name="dec"
                label="Decoder"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.canSubmit}
            >
            Submit
          </button>
        </Form>

        {this.renderData()}
      </div>
    )
  }
}

Chat.propTypes = {
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
    getListChat: (parent) => dispatch(getListChat(parent))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
