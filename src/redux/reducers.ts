import { Reducer, combineReducers } from 'redux';

import applicationReducer from './modules/application/reducer';
import postsReducer from './modules/posts/reducer';

import { IState as IApplicationState } from './modules/application/interfaces';
import { IState as IPostsState } from './modules/posts/interfaces';

export interface ApplicationState {
  application: IApplicationState;
  posts: IPostsState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  application: applicationReducer,
  posts: postsReducer,
});

export default reducers;
