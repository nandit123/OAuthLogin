import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;
        const code = navigation.getParam('code', 0);

        return (
            <View>
                <Text style={styles.head}>Code: {code}</Text>
                <Text style={styles.result}>This code is valid</Text>
                <Image
                    style={styles.stretch}
                    source={require('../images/product.jpg')}
                />
                <Text style={styles.productTitle}>Bose Headphones</Text>
                <Text style={styles.productDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <TouchableOpacity style={styles.claimItButton} >
                    <View>
                        <Text style={styles.buttonText}>Claim it</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.referButton} >
                    <View>
                        <Text style={styles.buttonText}>Refer Friend</Text>
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
    result: {
        margin:10, 
        marginLeft: 20, 
        fontSize: 20,
        color: "green" 
    },
    stretch: {
        width: 320,
        height: 200,
        marginLeft: 20,
        borderRadius: 25
    },
    productTitle: {
        margin:10, 
        marginLeft: 20,
        fontWeight: 'bold', 
        fontSize: 15,
        color: "#000" 
    },
    productDescription: {
        margin:10, 
        marginLeft: 20, 
        fontSize: 15,
        color: "#333"
    },
    claimItButton: {
        backgroundColor: 'darkgreen',
        borderRadius: 25,
        width: 150,
        marginVertical: 10,
        paddingVertical: 12,
        marginLeft: 25
    },
    referButton: {
        backgroundColor: '#1b3039',
        borderRadius: 25,
        width: 150,
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