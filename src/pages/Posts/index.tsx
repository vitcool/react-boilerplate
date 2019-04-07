import React, { FunctionComponent } from 'react';

import PostsList from 'components/Posts/PostsList';
import HeaderWrapper from 'components/common/HeaderWrapper';

import { IProps } from './interfaces';
import styles from './Posts.module.scss';

const Posts: FunctionComponent<IProps> = (props: IProps) => {
  const { fetchPosts, data, isFetching, errorMessage } = props;
  const handleFetchPosts = () => {
    fetchPosts();
  };
  const showPostsList = !isFetching && data[0] && errorMessage === '';

  return (
    <HeaderWrapper>
      <button onClick={handleFetchPosts} className={styles.fetchButton}>Fetch posts</button>
      {isFetching && <div>Loading...</div>}
      {showPostsList && <PostsList posts={data} />}
      {errorMessage !== '' && <div className={styles.errorMessage}>{errorMessage}</div>}
    </HeaderWrapper>
  );
};

export default Posts;
