import React, { FunctionComponent } from 'react';

import { NavLink } from 'react-router-dom';
import { HOME, POSTS, ABOUT } from 'constants/routes';

import { IProps } from './interfaces';
import styles from './HeaderWrapper.module.scss';

const HeaderWrapper: FunctionComponent<IProps> = (props: IProps) => {
  const { children } = props;

  return (
    <>
      <div className={styles.menuWrapper}>
        <NavLink to={HOME} className={styles.menuItem} activeClassName={styles.activeMenuItem} exact={true}>
          Home
        </NavLink>
        <NavLink to={POSTS} className={styles.menuItem} activeClassName={styles.activeMenuItem}>
          Posts
        </NavLink>
        <NavLink to={ABOUT} className={styles.menuItem} activeClassName={styles.activeMenuItem}>
          About
        </NavLink>
      </div>
      <div className={styles.pageContentWrapper}>
        {children}
      </div>
    </>
  );
};

export default HeaderWrapper;
