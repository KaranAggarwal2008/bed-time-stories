import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer style={styles.container} />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStory},
  Read: {screen: ReadStory},
}, 
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          <Image
          source={require("./write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Read"){
        return(
          <Image
          source={require("./read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);
const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {screen:LoginScreen},
  TabNavigator: {screen: TabNavigator},
})

const AppContainer =  createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
