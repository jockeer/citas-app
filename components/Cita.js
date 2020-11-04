import React from 'react'
import {Text,View,StyleSheet, TouchableOpacity } from 'react-native'

const Cita = ({cita,eliminarPaciente}) => {

    const dialogoEliminar = id => {
        console.log('eliminando...', id);
        // return
        eliminarPaciente(id);
    }
    return ( 
        <View style={style.cita}>
            <View>
                <Text style={style.label}>Paciente:</Text>
                <Text style={style.texto}>{cita.paciente}</Text>
            </View>
            <View>
                <Text style={style.label}>Propietario:</Text>
                <Text style={style.texto}>{cita.propietario}</Text>
            </View>
            <View>
                <Text style={style.label}>Sintomas:</Text>
                <Text style={style.texto}>{cita.sintomas}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => dialogoEliminar(cita.id)} style={style.btnEliminar}>
                    <Text style={style.textoEliminar}> Eliminar &times;</Text>
                </TouchableOpacity>
                
            </View>
        </View>
     );
}

const style = StyleSheet.create({
    cita:{
        backgroundColor:'#fff',
        borderBottomColor:'#e1e1e1',
        borderStyle:"solid",
        borderBottomWidth:1,
        paddingVertical:20,
        paddingHorizontal:10
    },
    label:{
        fontWeight:"bold",
        fontSize:18,
        marginTop:20
    },
    texto:{
        fontSize:18

    },
    btnEliminar:{
        padding:10,
        backgroundColor:'#1e5f74',
        marginVertical:10,
        borderRadius:5
    },
    textoEliminar:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:"center"
    }
})
 
export default Cita;