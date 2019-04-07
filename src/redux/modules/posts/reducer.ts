import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailed } from './actions';
import { IState } from './interfaces';

const INITIAL_STATE: IState = {
  isFetching: false,
  data: [],
  errorMessage: '',
};

const reducer = reducerWithInitialState<IState>(INITIAL_STATE)
  .case(fetchPostsRequest, state => ({
    ...state,
    isFetching: true,
  }))
  .case(fetchPostsSuccess, (state, payload) => ({
    ...state,
    isFetching: false,
    errorMessage: '',
    data: payload,
  }))
  .case(fetchPostsFailed, (state, payload) => ({
    ...state,
    isFetching: false,
    errorMessage: payload,
  }));

export default reducer;
