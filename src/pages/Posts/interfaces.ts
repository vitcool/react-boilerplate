import IPost from 'models/Post';

export interface Props {
  fetchPosts: any;
  isFetching: boolean;
  data: IPost[];
  errorMessage: string;
}
