import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Styles from './styles';
import Constants from 'expo-constants';
import Error from '../Error/Error';

const PlayerSearchScreen = ( {navigation} ) => {
    const { apiUrl, apiKey } = Constants.expoConfig.extra;
    const [username, setUsername] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${apiUrl}/v2/stats/br/v2?name=${username}`, {
               headers: {
                "Authorization": apiKey,
               }
            });
            setResult(response.data.data);
        } catch (err) {
            setError("Error fetching player. It\'s possible their account is private or you mispelled their handle.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Search for a Player</Text>
            <TextInput
                style={Styles.input}
                placeholder='Enter a Player handle...'
                value={username}
                onChangeText={setUsername}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
            />
            <Button
                title="Search"
                onPress={handleSearch}
                color="#6200ea"
            />
            {loading && <Text style={Styles.loadingText}>Loading...</Text>}
            {error && <Error />}
            {result && (
                <View style={Styles.resultContainer}>
                    <Text style={Styles.resultText}>Player Found:</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Player', { player: result })}>
                        <Text style={Styles.resultText}>{username}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default PlayerSearchScreen;
