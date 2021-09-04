import { FC } from 'react';
import Link from 'next/link';
import styles from './CommentItem.module.scss';

interface CommentItemProps {
  user: {
    id: number;
    fullname: string;
  };
  text: string;
  post: {
    id: number;
    title: string;
  };
}

export const CommentItem: FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.user}>
        <img
          src="https://leonardo.osnova.io/85efc03c-a1bd-52bb-ab88-451a6c0f9190/-/scale_crop/64x64/-/format/webp/"
          alt="Avatar"
        />
        <Link href={`/profile/${user.id}`}>
          <a>
            <b>{user.fullname}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${user.id}`}>
        <a>
          <span className={styles.title}>{post.title}</span>
        </a>
      </Link>
    </div>
  );
};
