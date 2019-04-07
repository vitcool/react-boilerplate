import React, { FunctionComponent } from 'react';

import Post from '../Post';
import IPost from 'models/Post';

import { IProps } from './interfaces';

const PostsList: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <>
      {props.posts.map((post: IPost) => <Post post={post} key={post.id} />)}
    </>);
};

export default PostsList;
