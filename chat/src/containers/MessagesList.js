import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'

const MessagesList = connect(state => ({
	messages: state.messages
}), {})(MessagesListComponent)

export MessagesList;
