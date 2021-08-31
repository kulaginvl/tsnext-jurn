import React, { FC } from 'react';
import MoreIcon from '@material-ui/icons/MoreVert';

import styles from './Comment.module.scss';
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';

interface CommentProps {
  user: {
    fullname: string;
  };
  text: string;
}

export const Comment: FC<CommentProps> = ({ user, text }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div>
        {/* <img src="" alt="" /> */}
        <b>Piter Parker</b>
        <span>5 часов</span>
      </div>
      <Typography>
        Sunt non anim veniam quis id quis id.Duis incididunt id nulla amet est.Reprehenderit quis
        commodo nostrud non labore anim enim nisi sunt.Nulla cillum aliqua sunt non Lorem tempor
        voluptate occaecat fugiat anim fugiat amet.
      </Typography>
      <span>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
