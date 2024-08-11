import { View, Text } from "react-native";
import Styles from "./styles";

const Error = () => {
    return (
        <Text style={Styles.errorText}>Error fetching player. It's possible their account is private or you've mispelled their handle.</Text>
    );
}

export default Error;
