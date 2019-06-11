import React, {Component} from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.head}>Authenticate products</Text>
                <TextInput style={styles.input} 
                    placeholder="Enter code here" 
                    placeholderTextColor="white"
                    onChangeText={(text) => this.setState({code: text})}
                />
                <TouchableOpacity style={styles.submitButton} 
                    onPress={() => this.props.navigation.navigate('Details', 
                    {code: this.state.code})} >
                    <View>
                        <Text style={styles.buttonText}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: { 
        margin:10, 
        marginLeft: 20,
        fontWeight: 'bold', 
        fontSize: 20,
        color: "#000" 
    },
    input: {
        width: 300, 
        backgroundColor: 'grey', 
        marginLeft: 20, 
        marginTop: 20, 
        borderRadius: 20, 
        color: "white", 
        padding: 20
    },
    submitButton: {
        backgroundColor: '#1b3039',
        borderRadius: 25,
        width: 100,
        marginVertical: 10,
        paddingVertical: 12,
        marginLeft: 25
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    }
    
});