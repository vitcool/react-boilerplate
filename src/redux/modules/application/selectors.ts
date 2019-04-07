import { ApplicationState } from 'redux/reducers';

export const getIsStarted = (state: ApplicationState) => state.application.isStarted;
