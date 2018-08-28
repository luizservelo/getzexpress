import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from './pages/Login';
import Posts from './pages/Posts';
import Notify from './pages/Notify';

const Routes = StackNavigator({
    Login: { screen: Login },
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