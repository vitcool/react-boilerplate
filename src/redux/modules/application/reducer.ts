import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { exampleAction } from './actions';
import { IState } from './types';

const INITIAL_STATE: IState = {
  isStarted: false,
};

const reducer = reducerWithInitialState<IState>(INITIAL_STATE).case(
  exampleAction,
  (state, payload) => ({ ...state, isStarted: payload })
);

export default reducer;
