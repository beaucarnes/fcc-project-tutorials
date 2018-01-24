import React from 'react'
import PropTypes from 'prop-types'

const Message = ({message, author}) => (
	<p> 
		<i>{author}</i>: {message}
	</p>
	)

Message.PropTypes = {
	message: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
}

export default Message