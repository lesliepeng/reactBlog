import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import TagsReducer from './reducer_tags';
import StyleReducer from './reducer_style';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  style: StyleReducer,
  posts: PostsReducer,
  tags: TagsReducer,
  form: formReducer
});

export default rootReducer;
