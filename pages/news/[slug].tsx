import { FullPost } from '../../components/FullPost';
import { PostComments } from '../../components/PostComments';
import data from '../../data';

import { MainLayout } from '../../layouts/MainLayout';

export default function Post() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
