import React, { FC } from 'react';
import Input from '@material-ui/core/Input';

import styles from './AddCommentForm.module.scss';
import { Button } from '@material-ui/core';

export const AddCommentForm: FC = () => {
  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState('');

  const onAddComment = () => {
    setClicked(false);
    setText('');
  };

  return (
    <div className={styles.form}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setClicked(true)}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        minRows={clicked ? 5 : 1}
        multiline
        fullWidth
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary">
          Опубликовать
        </Button>
      )}
    </div>
  );
};
