import config from 'src/config';

//PublicRoutes
import Home from 'src/pages/Home';
import Following from 'src/pages/Following';
import Profile from 'src/pages/Profile';
import Upload from 'src/pages/Upload';
import Search from 'src/pages/Search';
import { HeaderOnly } from 'src/layouts';

const publicRouter = [
    { path: config.routes.home, component: Home },
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
