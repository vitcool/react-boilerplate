import { IPost } from 'components/Posts/Post/interfaces';

export interface IState {
  isFetching: boolean;
  data: IPost[];
  errorMessage: string;
}
