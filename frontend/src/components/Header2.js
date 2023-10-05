import { View, Text } from "react-native";
import React from "react";

const Header2 = ({ title }) => {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "white",
        elevation: 20,
        justifyContent: "center",
      }}
    >
      <Text style={{ paddingLeft: 20, fontSize: 20, fontWeight: "700" }}>
        {title}
      </Text>
    </View>
  );
};

export default Header2;
