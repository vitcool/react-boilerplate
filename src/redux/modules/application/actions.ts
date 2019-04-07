import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('auth');

export const setIsStarted = actionCreator<any>('IS_STARTED');
