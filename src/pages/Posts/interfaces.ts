import { IPost } from 'components/Posts/Post/interfaces';

export interface IProps {
  fetchPosts: any;
  isFetching: boolean;
  data: IPost[];
  errorMessage: string;
}
