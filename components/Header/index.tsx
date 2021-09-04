import React, { FC } from 'react';
import Link from 'next/link';

import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowButton,
  NotificationsActiveOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';

import { Avatar, Button, IconButton, Paper } from '@material-ui/core';

import styles from './Header.module.scss';
import { AuthMenu } from '../AuthMenu';

export const Header: FC = () => {
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthMenu = () => {
    setAuthVisible(true);
  };

  const closeAuthMenu = () => {
    setAuthVisible(false);
  };

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
        <Link href="/write">
          <Button variant="contained">Новая запись</Button>
        </Link>
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
        <div className={styles.loginBtn} onClick={openAuthMenu}>
          <UserIcon />
          Войти
        </div>
      </div>
      {<AuthMenu onClose={closeAuthMenu} visible={authVisible} />}
    </Paper>
  );
};
