import React, { FunctionComponent } from 'react';

import Post from '../Post';
import { IPost } from '../Post/interfaces';

import { IProps } from './interfaces';
import styles from './Posts.module.scss';

const PostsList: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <>
      {props.posts.map((post: IPost) => <Post post={post} key={post.id} />)}
    </>);
};

export default PostsList;
