import React, { Fragment } from 'react';

import { Props } from './interfaces';
import styles from './HeaderWrapper.module.scss';
import { NavLink } from 'react-router-dom';
import { HOME, POSTS, ABOUT } from 'constants/routes';

const HeaderWrapper = (props: Props) => {
  const { children } = props;
  return <Fragment>
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
  </Fragment>;
}

export default HeaderWrapper;