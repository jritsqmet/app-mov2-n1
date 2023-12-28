import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Busqueda( props: any ) {
    //console.log( props.datos )
    const [busqueda, setbusqueda] = useState('falso')

    useEffect(() => {
      buscar();

    }, [])
    


    function buscar(){
        const lista=[2, -15, 5, 10, -8, 18, -3, 11, -20, 7]
        for( let item of lista){
            console.log(item)
        }
    }
  return (
    <View>
      <Text>Busqueda</Text>
      <Text>{props.datos}</Text>
      <Text>El elemento existe: {busqueda}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})