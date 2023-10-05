import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const product = useSelector((state) => state.product.products);
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View></View>
      <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
        Product List
      </Text>
      <TouchableOpacity
        style={{ paddingRight: 10 }}
        onPress={() => navigation.navigate("cart")}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 17,
            height: 17,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -10,
            right: 6,
            elevation: 10,
            zIndex: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{product.length}</Text>
        </View>
        <Entypo name="shopping-cart" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
