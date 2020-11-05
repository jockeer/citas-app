import React,{useState} from 'react';
import {Text, TextInput, View, StyleSheet , TouchableOpacity, ScrollView, Alert} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import shortid from 'shortid'

const Formulario = ({citas,setCitas,guardarMostrarForm}) => {

    const [paciente, guardarPaciente] = useState('')
    const [propietario, guardarPropietario] = useState('')
    const [telefono, guardarTelefono] = useState('')
    const [fecha, guardarFecha] = useState('')
    const [hora, guardarHora] = useState('')
    const [sintomas, guardarSintomas] = useState('')
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = (date) => {
        const opciones = {
            year:'numeric',
            month:'long',
            day:'2-digit'
        }
        guardarFecha(date.toLocaleDateString('es-Es', opciones));
        
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = (hora) => {
        const opciones = {
            hour:'numeric',
            minute:'2-digit',
            hour12:false
        }
        guardarHora(hora.toLocaleString('en-US',opciones));
        hideTimePicker();
    };

    const crearNuevaCita = () => {

        //validad

        if (paciente.trim()==='' || propietario.trim()==='' || telefono.trim()===''||fecha.trim()===''||hora.trim()===''||sintomas.trim()==='') {
            //falla la validacion
            mostrarAlerta();
            return;
        }
        
        //Crear nueva cita

        const cita = { paciente, propietario, telefono, fecha, hora, sintomas};

        cita.id=shortid.generate();

        console.log(cita);

        setCitas([
            ...citas,
            cita
        ])
        //ocultar fomulario
        guardarMostrarForm(false)
        //recargar formulario

        // const citasNuevo = [...citas,cita]
        // setCitas(citasNuevo)

    };

    //muestra la alerta si falla la validacion
    const mostrarAlerta = () => {
        Alert.alert(
            'Error', //titulo de la alerta
            'Todos los campos son obligatoris', // mensaje de la alerta
            [{
                text:'OK' //Arreglo de botones

            }]
        )
    }

    return ( 
        <>
    
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarPaciente(texto)}
                    
                    />
                </View>
                <View>
                    <Text style={styles.label}>Dueño: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarPropietario(texto)}
                    
                    />
                </View>
                <View>
                    <Text style={styles.label}>Telefono Contacto: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarTelefono(texto)}
                        keyboardType='phone-pad'
                    
                    />
                </View>
                <View>
                    <Text style={styles.label}>Seleccione la fecha:</Text>

                    <TouchableOpacity onPress={() => showDatePicker()} style={styles.btnEliminar}>
                        <Text style={styles.textoEliminar}> Seleccionar Fecha</Text>
                    </TouchableOpacity>

                    {/* <Button title="Seleccionar Fecha" onPress={showDatePicker} /> */}
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale="es_ES"
                        
                    />
                    <Text>{fecha}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Seleccione la hora:</Text>

                    <TouchableOpacity onPress={() => showTimePicker()} style={styles.btnEliminar}>
                        <Text style={styles.textoEliminar}> Seleccionar Hora</Text>
                    </TouchableOpacity>
                    
                    {/* <Button title="Seleccionar Hora" onPress={showTimePicker} /> */}
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale="es_ES"
                        is24Hour

                    />
                    <Text>{hora}</Text>

                </View>
                <View>
                    <Text style={styles.label}>Sistomas: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarSintomas(texto)}
                        multiline
                    
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={() => crearNuevaCita()} style={styles.btnEliminar}>
                        <Text style={styles.textoEliminar}> guardar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        
        </>
     );
}

const styles = StyleSheet.create({
    formulario:{
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:10

    },
    label:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:20,
        color:'#000'
    },
    input:{
        marginTop:10,
        height:50,
        borderColor:"#e1e1e1",
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:5
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
 
export default Formulario;