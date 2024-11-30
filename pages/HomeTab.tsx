import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import List from './BottomTabs/List';
import Users from './BottomTabs/Users';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {display: 'none'},
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Users" component={Users} />
    </Tab.Navigator>
  );
};

export default HomeTab;
