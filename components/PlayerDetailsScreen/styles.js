import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '98%',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        margin: 10
    },
    playerNameBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20,
    },
    playerNameText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    playerLevelText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    victoryRoyale: {
        color: 'gold',
        fontSize: 36,
        textAlign: 'center',
    },
    vrBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    statsText: {
        fontWeight: 'bold',
        fontSize: 24,
    }, deathColor: {
        color: 'red',
    },
    goodColor: {
        color: 'green'
    },
    footer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginTop: 'auto',
    },
    selected: {
        color: 'blue',
        fontSize: 20,
    },
    notSelected: {
        color: 'black',
        fontSize: 16,
    },
});

export default styles;
