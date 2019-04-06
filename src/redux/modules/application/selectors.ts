import { ApplicationState } from '../../reducers';

export const getIsStarted = (state: ApplicationState) => state.application.isStarted;
