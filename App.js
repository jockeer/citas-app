import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

import Cita from './components/Cita'
import Formulario from './components/Formulario'

const App = () => {

  //definir el state de citas
  const [citas, setCitas] = useState([
    { id:"1", paciente: "Hook", propietario: "Daniel", sintomas:"No come"},
    { id:"2", paciente: "Redux", propietario: "Pedro", sintomas:"No duerme"},
    { id:"3", paciente: "Natise", propietario: "Ismael", sintomas:"No canta"},
    { id:"4", paciente: "holi", propietario: "Ismael", sintomas:"No canta"}
  ]);

  const eliminarPaciente = id => {
    // setCitas((citasActuales)=> {
    //     return citasActuales.filter(cita => {
    //       return cita.id !== id
    //     })
    // })
    setCitas(
      citas.filter(cita => {
              return cita.id !== id
          })
    )

  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

        <Formulario />
      <Text style={styles.subtitulo}>
        {citas.length > 0 
          ?'Administra tus citas'
          :'No tienes citas Agregar una'
        }
      </Text>
      <FlatList 
        data={citas}
        renderItem={(cita) => { //siemrep deja un item 
          return <Cita cita={cita.item} eliminarPaciente={eliminarPaciente}/>  
        }}
        keyExtractor={cita => {
          return cita.id
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  contenedor:{
    backgroundColor:'#1d2d50',
    flex: 1
  },

  titulo: {
    marginTop:40,
    marginBottom:40,
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    color:'white'
  },

  subtitulo:{
    marginTop:20,
    marginBottom:10,
    paddingVertical:10,
    fontSize:20,
    fontWeight:"bold",
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#008891'
  }
})

export default App;
