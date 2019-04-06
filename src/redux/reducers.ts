import { Reducer, combineReducers } from 'redux';

import applicationReducer from './modules/application/reducer';
import { IState as IAuthState } from './modules/application/types';

export interface ApplicationState {
  application: IAuthState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  application: applicationReducer,
});

export default reducers;
