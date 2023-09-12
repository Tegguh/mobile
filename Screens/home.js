import { Button, View } from "react-native";
export default function home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
      <text>Teguh Adi Prayoga</text>
        
    </View>
  );
}
