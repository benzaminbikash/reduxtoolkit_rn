import { View, Text, Image, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADDTOCART, REMOVECART } from "../reducer/productSlice";

const ProductList = ({ item }) => {
  const product=useSelector((state)=>state.product.products)
  const dispatch = useDispatch();
  return (
    <View
      key={item.id}
      style={{
        alignItems: "center",
        marginHorizontal: 40,
        marginVertical:10,
        backgroundColor: "white",
        elevation: 20,
      }}
    >
      <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          color: "black",
          marginVertical: 4,
        }}
      >
        {item.name}
      </Text>
      <View style={{ marginBottom: 10, elevation: 20 }}>
       {
        product.includes(item)?
        <Button
        title="Remove Cart"
        color="red"
        onPress={() => dispatch(REMOVECART(item))}
      />: <Button
      title="Add To Cart"
      color="red"
      onPress={() => dispatch(ADDTOCART(item))}
    />
       }
      </View>
    </View>
  );
};

export default ProductList;
