import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { data } from "../db/dbProduct";
import ProductList from "../components/ProductList";
const Product = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        {data.map((item, index) => {
          return <ProductList item={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Product;
