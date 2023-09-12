import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function Pembagian() {
  const [nilai1, setnilai1] = useState("10");
  const [nilai2, setnilai2] = useState("20");
  const [nilai3, setnilai3] = useState("0");

  function Pembagian() {
    setnilai3(parseInt(nilai1) / parseInt(nilai2));
  }

  return (
    <View>
      <Text style={{ color: "blue", fontSize: 20 }}>Pembagian</Text>
      <TextInput
        style={styles.FormatInput}
        placeholder="Masukan Nilai 1"
        value={nilai1}
        onChangeText={(x) => setnilai1(x)}
      />
      <TextInput
        style={styles.FormatInput}
        placeholder="Masukan Nilai 2"
        value={nilai2}
        onChangeText={(x) => setnilai2(x)}
      />
      <Button color="red" title="Pembagian" onPress={Pembagian} />
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hasil : {nilai3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  FormatInput: {
    color: "blue",
    borderColor: "red",
    borderWidth: 2,
    fontSize: 15,
    backgroundColor: "yellow",
    padding: 10,
    marginBottom: 10,
  },
});
