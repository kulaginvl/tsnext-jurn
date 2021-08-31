import React, { FC } from 'react';
import Link from 'next/link';

import { Paper, Typography } from '@material-ui/core';
import { PostActions } from '../PostActions';
import styles from './Post.module.scss';

export const Post: FC = () => {
  return (
    <Paper
      elevation={0}
      className="p-20"
      // classes={{ root:}}
    >
      <Typography variant="h5">
        <Link href="/news/test-123">
          <a>
            Eiusmod mollit sint adipisicing sint nostrud quis veniam. Consectetur pariatur amet id
            officia mollit enim laboris laboris laboris aute aliquip exercitation et. Quis qui elit
            magna non reprehenderit.
          </a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">
        Eiusmod consequat non commodo aliquip amet et adipisicing. Et consequat sint elit Lorem esse
        nulla aliqua non do ipsum esse duis est laboris.
      </Typography>
      {/* <Image /> */}
      <PostActions />
    </Paper>
  );
};
