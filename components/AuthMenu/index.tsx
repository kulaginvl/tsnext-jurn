import React, { FC } from 'react';
import { Dialog, DialogContent, DialogContentText, Typography } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import styles from './AuthMenu.module.scss';
import { MainForm } from './forms/Main';
import { EmailForm } from './forms/Email';
import { RegisterForm } from './forms/Register';

interface AuthMenuProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthMenu: FC<AuthMenuProps> = ({ onClose, visible }) => {
  const [isAuthType, setIsAuthType] = React.useState<'main' | 'email' | 'register'>('main');
  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="xs"
      fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {isAuthType === 'main' ? (
                'Вход в VJ'
              ) : (
                <p onClick={() => setIsAuthType('main')} className={styles.backTitle}>
                  <NavigateBeforeIcon />К авторизации
                </p>
              )}
            </Typography>
            {isAuthType === 'main' && <MainForm onLogin={() => setIsAuthType('email')} />}
            {isAuthType === 'email' && <EmailForm onRegister={() => setIsAuthType('register')} />}
            {isAuthType === 'register' && (
              <RegisterForm
                onRegister={() => setIsAuthType('register')}
                onEmail={() => setIsAuthType('email')}
              />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
