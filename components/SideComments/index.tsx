import React, { FC } from 'react';

import styles from './SideComments.module.scss';

const items = [
  {
    user: {
      fullname: 'Иван Иванов',
    },
    text: 'Elit eiusmod qui incididunt veniam.',
    post: {
      title: 'Какая у вас дома ванна?',
    },
  },
  {
    user: {
      fullname: 'Иван Иванов',
    },
    text: 'Elit eiusmod qui incididunt veniam.',
    post: {
      title: 'Какая у вас дома ванна?',
    },
  },
  {
    user: {
      fullname: 'Иван Иванов',
    },
    text: 'Elit eiusmod qui incididunt veniam.',
    post: {
      title: 'Какая у вас дома ванна?',
    },
  },
];

interface CommentItemProps {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}

const CommentItemProps: FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <a href="#">
          <b>{user.fullname}</b>
        </a>
      </div>
      <p>{text}</p>
      <a href="#">
        <span>{post.title}</span>
      </a>
    </div>
  );
};
export const SideComments = () => {
  return (
    <div>
      <h3>{/* Комментарии <ArrowRightIcon /> */}</h3>
      {/* {items.map((obj) => (
        <CommentItem {...obj} />
      ))} */}
    </div>
  );
};

export default CommentItemProps;
