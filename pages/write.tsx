import React from 'react';
import { NextPage } from 'next';
import { TextField } from '@material-ui/core';
import { MainLayout } from '../layouts/MainLayout';

const WritePage: NextPage = () => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <div style={{ backgroundColor: '#fff' }}>
        <TextField placeholder="Заголовок" />
      </div>
    </MainLayout>
  );
};

export default WritePage;
