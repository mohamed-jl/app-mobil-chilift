import React from 'react'
import { View ,StyleSheet, TextInput, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Search = () => {
  return (
    <View style={styles.container}>
        <TextInput
         placeholder='search'
         style={styles.srch}
        />
        <View style={styles.btn}>
        <Button
         title='🔍'
         color='white'
        />
        </View >

    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        width:'75%',
        padding:8,
        marginBottom:0,
        height:50,
        borderWidth:1,
        borderColor:'#cccccc',
        borderRadius:20,
        position:'absolute',
        top:100,



    },
    srch:{

    },
    btn:{
        borerRadius:20,
        position:'absolute',
        top:0,
        left:250,
        backgroundColor:'white',
        height:70,
        shadowOpacity:0,

    }
})
