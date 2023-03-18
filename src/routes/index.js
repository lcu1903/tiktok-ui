import routesConfig from 'src/config/routes';

//PublicRoutes
import Home from 'src/pages/Home';
import Following from 'src/pages/Following';
import Profile from 'src/pages/Profile';
import Upload from 'src/pages/Upload';
import Search from 'src/pages/Search';
import { HeaderOnly } from 'src/components/Layout';

const publicRouter = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
