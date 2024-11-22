import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const EventDetailPage = () => {
  return (
    <View styles={styles.screen}>
      <Text>This is the Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight(),
  },
});

export default EventDetailPage;
