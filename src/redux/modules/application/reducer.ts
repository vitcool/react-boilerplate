import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { setIsStarted } from './actions';
import { IState } from './interfaces';

const INITIAL_STATE: IState = {
  isStarted: false,
};

const reducer = reducerWithInitialState<IState>(INITIAL_STATE).case(setIsStarted, state => ({
  ...state,
  isStarted: true,
}));

export default reducer;
