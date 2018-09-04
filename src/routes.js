import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from './pages/Login';
import Posts from './pages/Posts';
import Single from './pages/Single';
import Notify from './pages/Notify';

const Routes = StackNavigator({
    Login: { screen: Login },
    Single: { screen: Single },
    User: {
        screen: TabNavigator({
            Posts: { screen: Posts },
            Notify: { screen: Notify },
        })
    }
}, {
    initialRouteName: 'Login'
});

export default Routes;