import React, { FunctionComponent } from 'react';

import { IProps } from './interfaces';
import styles from './Post.module.scss';

const Post: FunctionComponent<IProps> = (props: IProps) => {
    const { post } = props;

    return (
        <div className={styles.postWrapper} key={post.id}>
            <div className={styles.postTitle}>{post.title}</div>
            <div className={styles.postDescription}>{post.body}</div>
        </div>
    );
};

export default Post;
