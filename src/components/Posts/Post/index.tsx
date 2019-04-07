import React from 'react';

import { Props } from './interfaces';
import styles from './Post.module.scss';

const Post = (props: Props) => {
    const { post } = props;
    return <div className={styles.postWrapper} key={post.id}>
        <div className={styles.postTitle}>{post.title}</div>
        <div className={styles.postDescription}>{post.body}</div>
    </div>
}

export default Post;
