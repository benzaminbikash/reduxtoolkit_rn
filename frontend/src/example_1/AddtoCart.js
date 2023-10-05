import { View, Text, Image, Button, ScrollView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVECART } from "../reducer/productSlice";

const AddtoCart = () => {
  const product = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "red",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          elevation:10
        }}
      >
        <Text style={{fontSize:20, fontWeight:'900', color:"white"}}>Your Cart</Text>
      </View>
      {product.map((item, index) => {
        return (
          <View
            key={item.id}
            style={{
              alignItems: "center",
              marginVertical: 10,
              marginHorizontal:50,
              backgroundColor: "white",
              elevation: 10,

            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 200, height: 200 }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "grey",
                marginVertical: 4,
              }}
            >
              {item.name}
            </Text>
            <View style={{ marginBottom: 10, elevation: 20 }}>
              <Button
                title="Remove Product"
                color="red"
                onPress={() => dispatch(REMOVECART(item))}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default AddtoCart;
