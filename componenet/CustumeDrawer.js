import React from 'react'
import { View,StyleSheet, Image,Text,TouchableOpacity } from 'react-native'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'

const CustumeDrawer = (props) => {
  return (
    <View style={styles.container}>
     <DrawerContentScrollView {...props} >
       <View style={styles.head}>
        <Image style={styles.img} source={require('../images/img2.jpg')}/>
        <Text style={styles.txt}>User name</Text>
       </View>
       <DrawerItemList {...props}/>
       <View style={styles.logout}>
       <TouchableOpacity >
        <Text>Logout</Text>
       </TouchableOpacity></View>
     </DrawerContentScrollView>
    </View>
  )
}

export default CustumeDrawer

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#5F7045',
    },
    head:{
        padding:50,
        borderBottomWidth:1,
        marginBottom:8,
        margin:8,
    },
    img:{
        height:80,width:80,borderRadius:40,
        position:'absolute',
    },
    txt:{
        fontSize:30,
        position:'absolute',
        left:80,
        top:20
    },
    logout:{
        position:'absolute',
        top:300,
        left:20,
        flex:1
    }
})
