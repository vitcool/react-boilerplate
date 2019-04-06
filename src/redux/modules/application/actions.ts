import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('auth');

export const exampleAction = actionCreator<any>('EXAMPLE');
