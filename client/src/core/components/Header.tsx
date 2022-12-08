import React, { FC } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export const Header: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.pageTitle}>Santa's Hood</Text>
      <Text style={styles.userName}>Padoru</Text>
      <Image
        source={{
          uri: "https://www.deviantart.com/turnip007/art/FREE-Padoru-Base-PSD-OPEN-824931031",
        }}
        style={styles.profilePic}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
