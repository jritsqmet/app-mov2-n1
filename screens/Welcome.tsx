import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <ImageBackground 
    source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/178/411/657/himalayas-mountains-landscape-sunset-wallpaper-preview.jpg'}}
    style={styles.container}
    >
        <Text style={{color:'white', fontSize:50}}>WELCOME</Text>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        resizeMode:'cover'
    }
})