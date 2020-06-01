import { combineReducers } from 'redux';
import { ADD_MESSAGE, CLEAR_MESSAGE } from '../actions/types'

const initMessageState = [
	{ id: 0, content: 'Dummy message 1' },
	{ id: 1, content: 'Dummy message 2' }
]

const messagesReducer = (messages = initMessageState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			console.log("adding");
			return [
				...messages,
				{
					id: action.id,
					content: action.message
				}
			];

		case CLEAR_MESSAGE:
			console.log("clearing");
			messages = [];
			return messages;

		default:
			console.log("defaulting");
			return messages;
	}
}

export default combineReducers({
	messages: messagesReducer,
});
