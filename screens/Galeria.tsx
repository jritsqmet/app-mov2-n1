import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fotografia from '../components/Fotografia'

export default function Galeria() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}>GALERÍA</Text>
      <Fotografia/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})