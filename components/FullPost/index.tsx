import { Button, Paper, Typography } from '@material-ui/core';
import { PostActions } from '../PostActions';
import {
  TextsmsOutlined as MessageIcon,
  PersonAddOutlined as UserAddIcon,
} from '@material-ui/icons';

import styles from './FullPost.module.scss';

export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
          Ex dolor laborum ipsum laborum id laboris minim ipsum consequat irure ipsum amet. Eu
          adipisicing in excepteur consequat magna et ad mollit quis magna et. Nulla nisi qui
          exercitation aliquip aliquip in ea commodo tempor. Fugiat ullamco anim consequat quis
          cillum elit labore excepteur. Consectetur dolor non eu est velit non tempor voluptate
          pariatur reprehenderit duis eiusmod commodo.
        </Typography>
        <div>
          <Typography>
            Ipsum eiusmod commodo adipisicing fugiat exercitation. Id esse deserunt nulla ad eu
            voluptate. Duis velit minim deserunt in irure.Consectetur consequat eu dolor id eu Lorem
            minim voluptate. Irure excepteur id proident sunt. Ullamco veniam officia anim do culpa
            qui nisi ullamco adipisicing exercitation nisi et. Tempor veniam ex mollit ipsum.
          </Typography>
          <Typography>
            Quis excepteur in ullamco id exercitation Lorem cillum anim aliqua fugiat Lorem
            enim.Fugiat nulla cupidatat aliquip aliqua.
          </Typography>
          <Typography>Et sint labore elit ut ipsum esse dolor elit.</Typography>
          <Typography>
            Voluptate eu magna reprehenderit ipsum minim qui minim est eu. Esse irure elit mollit
            sunt duis elit sint ad eiusmod reprehenderit aliqua. Sint pariatur aliquip officia velit
            aliqua qui do officia. Commodo aliquip nisi anim cupidatat aliqua tempor culpa
            adipisicing.
          </Typography>
          <div style={{ width: 250, marginLeft: -14 }}>
            <PostActions />
          </div>
          <div className="d-flex justify-between align-center mt-30 mb-30">
            <div className={styles.user}>
              <img
                src="https://leonardo.osnova.io/675d2d42-c6ec-8906-c746-c8835a9e68e6/-/scale_crop/64x64/"
                alt="Avatar"
              />
              <b>Donnie Darko</b>
              <span>+1685</span>
            </div>
            <div>
              <Button variant="contained">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-10">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};
