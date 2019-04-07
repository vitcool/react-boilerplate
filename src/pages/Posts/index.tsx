import React from 'react';
import { Props } from './interfaces';
import PostsList from 'components/Posts/PostsList';
import HeaderWrapper from 'components/common/HeaderWrapper';

import styles from './Posts.module.scss';

const Posts = (props: Props) => {
  const { fetchPosts, data, isFetching, errorMessage } = props;
  const handleFetchPosts = () => {
    fetchPosts();
  }
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