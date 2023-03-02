//PublicRoutes
import Home from 'src/pages/Home';
import Following from 'src/pages/Following';
import Profile from 'src/pages/Profile';
import Upload from 'src/pages/Upload';
import Search from 'src/pages/Search';
import { HeaderOnly } from 'src/components/Layout';


const publicRouter = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
