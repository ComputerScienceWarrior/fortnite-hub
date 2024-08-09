import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6200ea',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        padding: 12,
        borderColor: '#6200ea',
        borderWidth: 2,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#ffffff',
    },
    button: {
        backgroundColor: '#6200ea',
        padding: 12,
        borderRadius: 8,
    },
    resultContainer: {
        marginTop: 16,
        padding: 16,
        backgroundColor: '#e1bee7',
        borderRadius: 8,
    },
    resultText: {
        fontSize: 18,
        color: '#6200ea',
    },
    loadingText: {
        fontSize: 16,
        color: '#6200ea',
        marginTop: 16,
    },
    errorText: {
        fontSize: 16,
        color: '#b00020',
        marginTop: 16,
    },
});

export default Styles;
