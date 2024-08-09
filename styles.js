import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'purple'
    },
    headerText: {
        color: 'white',
        fontSize: 48,
    },
    button: {
        backgroundColor: 'red', // Button background color
        padding: 15, // Padding inside the button
        borderRadius: 5, // Rounded corners
        width: 200, // Button width
        alignItems: 'center', // Center text inside button
        fontSize: 24,
      },
      buttonText: {
        color: '#fff', // Text color
        fontSize: 16, // Text size
      },
  });
