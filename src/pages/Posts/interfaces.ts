import { Post } from 'components/Posts/Post/interfaces';

export interface Props {
  fetchPosts: any;
  isFetching: boolean;
  data: Post[];
  errorMessage: string;
}
