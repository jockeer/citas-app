import React,{useState} from 'react';
import {Text, TextInput, View, StyleSheet , Button, TouchableOpacity} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const Formulario = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = (date) => {
        console.warn("A date has been picked: ", date);
        hideTimePicker();
    };

    return ( 
        <>
        <View style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                
                />
            </View>
            <View>
                <Text style={styles.label}>Dueño: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                
                />
            </View>
            <View>
                <Text style={styles.label}>Telefono Contacto: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
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

                />

            </View>
            <View>
                <Text style={styles.label}>Sistomas: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                    multiline
                
                />
            </View>
        </View>
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