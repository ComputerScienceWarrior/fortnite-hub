import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import Styles from './styles';

const PlayerSearchScreen = () => {
    const [username, setUsername] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        try {
            const response =  await axios.get(`https://fortnite-api.com/v2/stats/br/v2?name=${username}`, {
               
            });
            alert(response);
            setResult(response.data);
        } catch (err) {
            setError('Error fetching player');
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
            {error && <Text style={Styles.errorText}>{error}</Text>}
            {result && (
                <View style={Styles.resultContainer}>
                    <Text style={Styles.resultText}>Player Found:</Text>
                    {console.log(result.username)}
                    {/* <Text style={Styles.resultText}>{result.username}</Text> */}
                </View>
            )}
        </View>
    );
};

export default PlayerSearchScreen;
