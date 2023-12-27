import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Fotografia() {
  return (
    <View>
      <Text>Fotografia</Text>
      <ScrollView
        horizontal={true}
      >
        <Image 
            source={{uri: 'https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg' }}
            style={styles.img}
        />
         <Image 
            source={{uri: 'https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg' }}
            style={styles.img}
        />
         <Image 
            source={{uri: 'https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg' }}
            style={styles.img}
        />

      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width:300,
        height:400
    }
})