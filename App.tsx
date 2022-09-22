import { useFonts } from 'expo-font'


import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';


import LogIn from './screens/Login/index';
import Register from './screens/Register/Register';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from './components/colors';
import Charts from './screens/Charts';
import Settings from './screens/Settings';


const Tab = createBottomTabNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    'inter-regular' : require('./assets/fonts/Inter-Regular.ttf'),
    'inter-semiBold' : require('./assets/fonts/Inter-SemiBold.ttf'),
    'inter-bold' : require('./assets/fonts/Inter-Bold.ttf'),
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
  
  <NavigationContainer>
      <Tab.Navigator
      
      screenOptions={{
        tabBarActiveTintColor:colors.white,
        tabBarInactiveTintColor: colors.white,

        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle:{
          position: 'absolute',
          bottom: 15,
          left:'50%',
          transform:([{ translateX: -125}]),

          backgroundColor: colors.darkPurple,

          borderRadius: 25,
          height: 60,
          width: 250,
          paddingHorizontal: 15,

          elevation:0
        }
      }}
      >
        <Tab.Screen 
        name="Homes"
        component={Home}
        options={{
          tabBarIcon: ({focused,color,size})=>{
            if(focused){
              return <Ionicons name="wallet" size={size} color={color} />
            }
            else{
              return <Ionicons name="wallet-outline" size={size} color={color} />
            }
          }
        }}
       />

        <Tab.Screen name="Charts" component={Charts} 
        options={{
          tabBarIcon: ({focused,color,size})=>{
            if(focused){
              return <Ionicons name="bar-chart" size={size} color={color} />
            }
            else{
              return <Ionicons name="md-bar-chart-outline" size={size} color={color} />
            }
          }
        }}
        
        />

        <Tab.Screen name="LogIn" component={LogIn} 
        options={{
          tabBarIcon: ({focused,color,size})=>{
            if(focused){
              return<Ionicons name="notifications" size={size} color={color} />
            }
            else{
              return <Ionicons name="notifications-outline" size={size} color={color} />
            }
          }
        }}
        
        />
        <Tab.Screen name="Settings" component={Settings} 
        options={{
          tabBarIcon: ({focused,color,size})=>{
            if(focused){
              return<Ionicons name="settings" size={size} color={color} />
            }
            else{
              return <Ionicons name="settings-outline" size={size} color={color} />
            }
          }
        }}
        
        />

      </Tab.Navigator>
    </NavigationContainer>








  );
}


