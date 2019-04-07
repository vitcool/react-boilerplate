import { Post } from 'components/Posts/Post/interfaces';

export interface IState {
  isFetching: boolean;
  data: Post[];
  errorMessage: string;
}
