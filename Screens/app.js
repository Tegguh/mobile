import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home";
import Notif from "./Notif";
import Penjumlahan from "./Perjumlahan";
import Perkalian from "./Perkalian";
import Pengurangan from "./Pengurangan";
import Pembagian from "./Pembagian";

const Drawer = createDrawerNavigator();

export default function App1() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notif" component={Notif} />
        <Drawer.Screen name="Penjumlahan" component={Penjumlahan} />
        <Drawer.Screen name="Pengurangan" component={Pengurangan} />
        <Drawer.Screen name="Perkalian" component={Perkalian} />
        <Drawer.Screen name="Pembagian" component={Pembagian} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
