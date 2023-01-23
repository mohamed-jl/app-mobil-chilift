import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View , StyleSheet,ImageBackground} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './componenet/header';
import SearchBar from './componenet/SearchBar';
import Items from './componenet/Items';

function HomeScreen({ navigation }) {
  return (
   
    <View style={styles.container} >
      
       <Header/>
       
       <Items/>
     
    </View>
  );
}

function ArticleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function TableScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function FeedbackScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator style={{backgroundColor:'red'}} >
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerStyle:{backgroundColor:'red'}}} />
        <Drawer.Screen name="Article" component={ArticleScreen} />
        <Drawer.Screen name="Table" component={TableScreen} />
        <Drawer.Screen name="FeedBack" component={FeedbackScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    top:60,
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection:'column',
  }
})