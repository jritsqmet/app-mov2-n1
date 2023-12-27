import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Welcome( {navigation}:any ) {
  return (
    <ImageBackground 
    source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/178/411/657/himalayas-mountains-landscape-sunset-wallpaper-preview.jpg'}}
    style={styles.container}
    >
        <Text style={{color:'white', fontSize:50}}>WELCOME</Text>


        <TouchableOpacity onPress={ ()=> navigation.navigate('Tab')  } >
          <Text style={{color:'white', fontSize:40}}>Continuar</Text>
        </TouchableOpacity>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        resizeMode:'cover'
    }
})