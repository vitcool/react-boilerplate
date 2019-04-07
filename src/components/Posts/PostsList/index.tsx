import React, { Fragment } from 'react';

import styles from './Posts.module.scss';

import { Props } from './interfaces';
import Post from '../Post';
import { Post as IPost } from '../Post/interfaces';

const PostsList = (props: Props) => {
  return <Fragment>{props.posts.map((post: IPost) =>
    <Post post={post} key={post.id} />)}</Fragment>;
}

export default PostsList;