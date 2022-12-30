import React from 'react'
import { StyleSheet, View,Image } from 'react-native'
import Item from './Item'

const Items = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Item txt='Table' img={require("C:/Users/Mohamed/Desktop/projet jdid/chilift5.0/images/img1.jpg")}/>
        <Item txt='FeedBack' img={require("C:/Users/Mohamed/Desktop/projet jdid/chilift5.0/images/feedback.png")}/>
      </View>
      <View style={{flexDirection:'row'}}>
       <Item txt='Article' img={require("C:/Users/Mohamed/Desktop/projet jdid/chilift5.0/images/article.jpg")}/>
        <Item txt='Product' img={require("C:/Users/Mohamed/Desktop/projet jdid/chilift5.0/images/product.jpg")}/>
      </View>
    </View>
  )
}

export default Items

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        borderRadius:20,
        borderWidth:0,
        
        top:190,
        

    }
})