export interface IProps {
  post: IPost;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
