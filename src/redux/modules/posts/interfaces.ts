import IPost from 'models/Post';

export interface IState {
  isFetching: boolean;
  data: IPost[];
  errorMessage: string;
}
