import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import TagsReducer from './reducer_tags';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  tags: TagsReducer,
  form: formReducer
});

export default rootReducer;
