import { combineReducers } from 'redux';
import { ADD_MESSAGE } from '../actions/types'

const initMessageState = [
	{ id: 0, content: 'Dummy message 1' },
	{ id: 1, content: 'Dummy message 2' }
]

const messagesReducer = (messages = initMessageState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return [
				...messages,
				{
					id: action.id,
					content: action.message
				}
			];

		default:
			return messages;
	}
}

export default combineReducers({
	messages: messagesReducer,
});
