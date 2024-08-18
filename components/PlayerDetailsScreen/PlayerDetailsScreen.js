import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";
import styles from "./styles";

const PlayerDetailsScreen = ({ route }) => {
    const [mode, setMode] = useState('solo');
    const { player } = route.params;

    const getStats = () => {
        switch (mode) {
            case 'solo':
                return player.stats.all.solo;
            case 'duo':
                return player.stats.all.duo;
            case 'squads':
                return player.stats.all.squad;
            default:
                return player.stats.all.solo;
        };
    };

    const stats = getStats();

    return (
        <SafeAreaView style={styles.container}>            
            <View style={styles.playerNameBox}>
                <Text style={styles.playerNameText}>{player.account.name}</Text>
                <Text style={styles.playerLevelText}>Lv. {player.battlePass.level}</Text>
            </View>
            <View style={styles.vrBox}>
                <Text style={styles.victoryRoyale}>Victory Royales: {stats.wins}</Text>
                <Image width={30} height={30} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS14dqO8dKFXvKa9ebPcuhMABwMgXnbN5WwQ&s'}}/>

                <View style={styles.killsDeathsBox}>
                    <Text style={styles.statsText}>Matches Played: {stats.matches}</Text>
                    <Text style={styles.statsText}>Win Rate: <Text style={styles.goodColor}>{Math.round(stats.winRate)}%</Text></Text>
                    <Text style={styles.statsText}>Kills: <Text style={styles.goodColor}>{stats.kills}</Text></Text>
                    <Text style={styles.statsText}>Deaths: <Text style={styles.deathColor}>{stats.deaths}</Text></Text>
                    <Text style={styles.statsText}>Kill Average: {Math.round(stats.killsPerMatch)}%</Text>
                    <Text style={styles.statsText}>Kill to Death Ratio: {Math.round(stats.kd)}%</Text>
                </View>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <TouchableOpacity onPress={() => setMode('solo')}>
                    <Text style={{ fontSize: 16, color: mode === 'solo' ? 'blue' : 'black' }}>Solo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMode('duo')}>
                    <Text style={{ fontSize: 16, color: mode === 'duo' ? 'blue' : 'black' }}>Duo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMode('squads')}>
                    <Text style={{ fontSize: 16, color: mode === 'squads' ? 'blue' : 'black' }}>Squads</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default PlayerDetailsScreen;
