import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import Busqueda from '../components/Busqueda'

export default function Formulario() {

    //useState
    const [name, setname] = useState('')
    const [numero1, setnumero1] = useState(0)
    const [numero2, setnumero2] = useState(0)

    const [respuesta, setrespuesta] = useState(0)

    function suma(){
        setrespuesta( numero1 + numero2 )
    }

    return (
        <View style={styles.container}>
            <Text>Formulario</Text>

            <TextInput
                placeholder='Ingrese su nombre'
                style={styles.input1}
                onChangeText={(texto) => (setname(texto))}
            />

            <Text style={{ fontSize: 20 }}> {name}</Text>

            <Text>EJERCICIO</Text>

            <View style={styles.fila}>

                <TextInput
                    placeholder='Primer número'
                    keyboardType='numeric'
                    style={styles.input2}
                    onChangeText={  (texto)=>( setnumero1(+texto) )  }
                />
                <Text>      </Text>
                <TextInput
                    placeholder='Segundo número'
                    style={styles.input2}
                    keyboardType='numeric'
                    onChangeText={ (texto) => ( setnumero2(+texto))}
                />
            </View>

            <Text>{respuesta}</Text>
            <Button title='SUMAR' onPress={suma}/>

            <View style={{borderWidth:1, backgroundColor:'black', width:'90%', marginTop:10}}></View>
            <Text>BÚSQUEDA</Text>
            <Busqueda datos ={ respuesta } />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#69f78c',
        flex: 1,
        alignItems: 'center'
    },
    input1: {
        backgroundColor: 'white',
        height: 40,
        width: "75%",
        borderRadius: 20,
        paddingHorizontal: 30
    },
    input2: {
        backgroundColor: 'white',
        height: 40,
        width: '30%'
    },
    fila:{
        flexDirection:'row'
    }
})