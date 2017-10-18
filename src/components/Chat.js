import React, {Component} from 'react'
import {Form, Input, Textarea} from 'formsy-react-components';
import {getListChat, addChat} from '../actions/chatAction'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Chat extends Component {

  constructor() {
    super()
    this.state = {
      prevCategory: '',
      currentCategory: '',
      canSubmit: false,
      chatUpdated: false
    }
    this.handleValid = this.handleValid.bind(this)
    this.handleInvalid = this.handleInvalid.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.chatForm = null;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      prevCategory: this.state.currentCategory,
      currentCategory: nextProps.match.params.categoryId
    })

    if (nextProps.addSuccess && !this.state.chatUpdated) {
      this.setState({chatUpdated: true})
      this.props.getListChat(nextProps.match.params.categoryId)
    }
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
    this.props.addChat(data)
    this.chatForm.refs.formsy.reset()
    this.setState({chatUpdated: false})
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
          onInvalid={this.handleInvalid}
          ref={(node) => { this.chatForm = node }}>

          <Input
            name="parent"
            value={this.state.currentCategory}
            type="hidden"
          />

          <div className="row">
            <div className="col-md-6 col-xs-6">
              <Textarea
                rows={3}
                placeholder="Encoder"
                name="enc"
                label="Encoder"
                value=""
                required
              />
            </div>
            <div className="col-md-6 col-xs-6">
              <Textarea
                rows={3}
                placeholder="Decoder"
                name="dec"
                value=""
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
  isLoading: PropTypes.bool.isRequired,

  addSuccess: PropTypes.bool.isRequired,
  addError: PropTypes.bool.isRequired,
  addLoading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    chats: state.chats.chats,
    isSuccess: state.chats.chatListSuccess,
    hasError: state.chats.chatListError,
    isLoading: state.chats.chatListLoading,

    addSuccess: state.chats.chatAddSuccess,
    addError: state.chats.chatAddError,
    addLoading: state.chats.chatAddLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListChat: (parent) => dispatch(getListChat(parent)),
    addChat: (data) => dispatch(addChat(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
