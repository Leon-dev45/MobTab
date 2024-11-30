import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTab from './pages/HomeTab';
import ProfileTAb from './pages/ProfileTAb';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'front',
        }}>
        <Drawer.Screen name="Home" component={HomeTab} />
        <Drawer.Screen name="Profile" component={ProfileTAb} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
