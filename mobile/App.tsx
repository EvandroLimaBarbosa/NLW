import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, ButtonProps } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Se Liga!!</Text>
      <Button title="Não Aperte!!"/>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps{
  title: string;
}


function Button(props: ButtonProps) {
  return (
    <TouchableOpacity >
      <Text style={styles.button}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f3f3f",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ac0000",
    fontSize: 50,
  },
  button: {
    backgroundColor: "blue",
    margin: 10,
    padding: 5
  }
});
