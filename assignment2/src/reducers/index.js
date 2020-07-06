import { combineReducers } from 'redux';
import { ADD_MESSAGE_SUCCESS, CLEAR_MESSAGE_SUCCESS, GET_MESSAGE_SUCCESS } from '../actions/types'

const initMessageState = [
	{ content: 'Dummy message 1', date: 'Jan 01, 2020' },
	{ content: 'Dummy message 2', date: 'Jan 02, 2020' }
]

const messagesReducer = (messages = initMessageState, action) => {
	switch (action.type) {
		case ADD_MESSAGE_SUCCESS:
			console.log("adding");
			console.log(action);
			return [
				...messages,
				{
					content: action.content,
					date: action.date
				}
			];

		case CLEAR_MESSAGE_SUCCESS:
			console.log("clearing");
			messages = [];
			return messages;

		case GET_MESSAGE_SUCCESS:
			console.log("getting");
			messages = action.payload;
			return messages;

		default:
			console.log("defaulting");
			return messages;
	}
}

export default combineReducers({
	messages: messagesReducer,
});
