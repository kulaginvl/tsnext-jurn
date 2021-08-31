import Link from 'next/link';
import { Avatar, Button, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from '@material-ui/icons';

import { MainLayout } from '../../layouts/MainLayout';
import { Post } from '../../components/Post';

export default function Profile() {
  return (
    <MainLayout contentFullWidth hideComments>
      <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
        <div className="d-flex justify-between">
          <div>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              // src=''
            />
            <Typography style={{ fontWeight: 'bold' }} className="mt-10" variant="h4">
              Vlad Ku
            </Typography>
          </div>
          <div>
            <Link href="/profile/settings">
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained">
                <SettingsIcon />
              </Button>
            </Link>
            <Button style={{ height: 42 }} variant="contained" color="primary">
              <MessageIcon className="mr-10" />
              Написать
            </Button>
          </div>
        </div>
        <div className="d-flex mb-10">
          <Typography style={{ fontWeight: 'bold', color: '#35ab66' }} className="mr-15">
            +887
          </Typography>
          <Typography>7 подписчиков</Typography>
        </div>
        <Typography>На проекте с 1 авг 2020</Typography>
        <Tabs>
          <Tab label="Статьи" />
          <Tab label="Комменнтарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>
      <div className="d-flex align-start">
        <div className="mr-20 flex">
          <Post />
        </div>
        <Paper style={{ width: 300 }} className="p-20 b-20" elevation={0}>
          <b>Подписчики</b>
          <div className="d-flex mt-15">
            <Avatar
              className="mr-10"
              //src=''
            />
            <Avatar
              className="mr-10"
              //src=''
            />
          </div>
        </Paper>
      </div>
    </MainLayout>
  );
}
