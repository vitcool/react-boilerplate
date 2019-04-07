import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory('posts');

export const fetchPostsRequest = actionCreator<any>('FETCH_POSTS_REQUEST');

export const fetchPostsSuccess = actionCreator<any>('FETCH_POSTS_SUCCESS');

export const fetchPostsFailed = actionCreator<any>('FETCH_POSTS_FAILED');
