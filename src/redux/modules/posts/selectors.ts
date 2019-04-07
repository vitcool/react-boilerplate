import { ApplicationState } from 'redux/reducers';

export const getIsFetching = (state: ApplicationState) => state.posts.isFetching;
export const getData = (state: ApplicationState) => state.posts.data;
export const getErrorMessage = (state: ApplicationState) => state.posts.errorMessage;
