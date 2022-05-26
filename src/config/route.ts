import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import PrivacyPage from '../pages/privacy';
import TermsPage from '../pages/terms';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/Privacy',
        name: 'Privacy Page',
        component: PrivacyPage,
        exact: true
    },
    {
        path: '/Privacy/:number',
        name: 'Privacy Page',
        component: PrivacyPage,
        exact: true
    },
    {
        path: '/Terms',
        name: 'Terms Page',
        component: TermsPage,
        exact: true
    },
    
]

export default routes;