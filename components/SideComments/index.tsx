import React, { FC } from 'react';

import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import data from '../../data';

import styles from './SideComments.module.scss';
import { CommentItem } from '../CommentItem';
import clsx from 'clsx';

export const SideComments = () => {
  const [visibleComments, setVisibleComments] = React.useState(false);

  const toggleVisible = () => {
    setVisibleComments(!visibleComments);
  };

  return (
    <div className={clsx(styles.root, !visibleComments && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visibleComments && data.comments.popular.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
