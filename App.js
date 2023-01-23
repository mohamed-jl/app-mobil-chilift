import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View , StyleSheet,ImageBackground,ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './componenet/header';
import SearchBar from './componenet/SearchBar';
import Items from './componenet/Items';
import Article from './componenet/Article';

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
    <ScrollView >
      <Article title={"article 1"} desc={"description"}/>
      <Article title={"article 2"} desc={"description ncnsnckncsclql xkqnxlq x lj pql n kqp n qùq,mclc  ,ls"}/>
      <Article title={"article 3"} desc={"description"}/>
    </ScrollView>
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