import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginView: {
        backgroundColor: '#191919',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',    
        color: '#ffffff',
        marginBottom: 5
    },
    subtitle: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 10
    },
    form: {
        marginTop: 20
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 3,
        width: 220,
        height: 30,
        paddingLeft: 10,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#E75112',
        borderRadius: 3,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold'
    }

});

export default styles;