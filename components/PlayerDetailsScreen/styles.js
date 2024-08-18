import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        padding: 10
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
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    },
    statsText: {
        fontWeight: 'bold',
        fontSize: 24,
    }, deathColor: {
        color: 'red',
    },
    goodColor: {
        color: 'green'
    }

});

export default styles;
