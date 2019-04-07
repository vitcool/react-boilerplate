import IPost from 'models/Post';

export interface IProps {
  fetchPosts: any;
  isFetching: boolean;
  data: IPost[];
  errorMessage: string;
}
