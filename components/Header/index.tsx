import { FC } from 'react';
import Link from 'next/link';

import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowButton,
  NotificationsActiveOutlined as NotificationIcon,
} from '@material-ui/icons';

import { Avatar, Button, IconButton, Paper } from '@material-ui/core';

import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <Paper elevation={0} classes={{ root: styles.root }}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>{/* <img src="" alt="" /> */}</a>
        </Link>
        <div>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>
        <Button variant="contained">Новая запись</Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar alt="Remy Sharp" />
            <ArrowButton />
          </a>
        </Link>
      </div>
    </Paper>
  );
};
