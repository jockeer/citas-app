import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Cita from './components/Cita'
import Formulario from './components/Formulario'

const App = () => {

  const[mostrarform, guardarMostrarForm] = useState(false)

  //definir el state de citas
  const [citas, setCitas] = useState([

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
  //muestra o oculta el formulario

  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform)
  }

  //ocultar el teclado

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

  return (
    
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>

        <View>
            <TouchableOpacity onPress={() => mostrarFormulario()} style={styles.btnMotrarForm}>
                <Text style={styles.textoMostrarForm}> {mostrarform ? 'Mostrar Citas' : 'Crear nueva Cita'}  </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.contenido}>
          {mostrarform
            ?<>
            <Text style={styles.subtitulo}>Crear nueva cita</Text>
              <Formulario citas={citas} setCitas={setCitas} guardarMostrarForm={guardarMostrarForm}/>
            </>
            :<>
            <Text style={styles.subtitulo}>
              {citas.length > 0 
                ?'Administra tus citas'
                :'No tienes citas Agregar una'
              }
            </Text>
            <FlatList
              style={styles.listado} 
              data={citas}
              renderItem={(cita) => { //siemrep deja un item 
                return <Cita cita={cita.item} eliminarPaciente={eliminarPaciente}/>  
              }}
              keyExtractor={cita => {
                return cita.id
              }}
            />
            </>
          }
          
          

        </View>
      </View>

    
  );
};

const styles = StyleSheet.create({
  
  contenedor:{
    backgroundColor:'#1d2d50',
    flex: 1
  },

  titulo: {
    marginTop: Platform.OS === 'ios' ? 40 : 20 ,
    marginBottom: Platform.OS === 'ios' ? 40 : 20 ,
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
  },

  contenido:{
    flex:1

  },
  listado:{
    flex:1
  },
  btnMotrarForm:{
    padding:10,
    backgroundColor:'#1e5f74',
    marginVertical:10,
    borderRadius:5
  },
  textoMostrarForm:{
      color:'#fff',
      fontWeight:'bold',
      textAlign:"center"
  }
    

})

export default App;
