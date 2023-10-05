import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import Header2 from "../components/Header2";
import { data2 } from "../db/dbProduct2";
import { useDispatch, useSelector } from "react-redux";
import { ALLPRODUCT } from "../reducer/ProductSlice2";
import { ADDCART, DECREASECART, INCREASECART } from "../reducer/cartSlice";
import { useNavigation } from "@react-navigation/native";
const Product2 = () => {
  const navigation = useNavigation();
  const myProduct = useSelector((state) => state.product2);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (myProduct.length === 0) {
      data2.map((item) => {
        dispatch(ALLPRODUCT(item));
      });
    }
  }, []);
  const totalCart = cart.length;
  let totalPrice = 0;
  const getTotalPrice = () => {
    cart.map((item) => {
      totalPrice += item.qty * item.price;
    });
    return totalPrice;
  };
  return (
    <View>
      <Header2 title=" Redux ToolKit" />
      <View style={{ marginBottom: 100 }}>
        <FlatList
          data={myProduct}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  backgroundColor: "white",
                  margin: 10,
                  elevation: 10,
                  flexDirection: "row",
                  borderRadius: 10,
                  gap: 10,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 100,
                    height: 100,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {item.name.length > 30
                      ? item.name.substring(0, 30) + "...."
                      : item.name}
                  </Text>
                  <Text style={{ color: "green", fontWeight: "bold" }}>
                    $ {item.price}
                  </Text>
                  {cart.find((d) => d.id === item.id) ? (
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => dispatch(DECREASECART(item))}
                        style={{
                          backgroundColor: "green",
                          width: 30,
                          height: 30,
                          marginTop: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 20,
                        }}
                      >
                        <Text style={{ color: "white", fontWeight: "600" }}>
                          -
                        </Text>
                      </TouchableOpacity>

                      <Text
                        style={{
                          color: "black",
                          fontWeight: "600",
                          fontSize: 25,
                          marginTop: 5,
                        }}
                      >
                        {cart.find((d) => d.id === item.id)?.qty || 0}
                      </Text>

                      <TouchableOpacity
                        onPress={() => dispatch(INCREASECART(item))}
                        style={{
                          backgroundColor: "green",
                          width: 30,
                          height: 30,
                          marginTop: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 20,
                        }}
                      >
                        <Text style={{ color: "white", fontWeight: "600" }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() =>
                        dispatch(ADDCART({ ...item, qty: item.qty + 1 }))
                      }
                      style={{
                        backgroundColor: "green",
                        width: 100,
                        height: 35,
                        marginTop: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                      }}
                    >
                      <Text style={{ color: "white", fontWeight: "600" }}>
                        Add to Cart
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            );
          }}
        />
        {cart.length > 0 && (
          <View
            style={{
              backgroundColor: "green",
              height: 60,
              position: "absolute",
              bottom: 30,
              width: Dimensions.get("window").width - 10,
              marginHorizontal: 5,
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 16 }}>
                Total Items ({totalCart})
              </Text>
              <Text style={{ color: "white", fontSize: 14 }}>
                $ {getTotalPrice()}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("cart")}
              style={{
                backgroundColor: "green",
                elevation: 10,
                height: 40,
                borderRadius: 10,
                width: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 17 }}
              >
                View Cart
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Product2;
