export interface Props {
  post: Post;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
