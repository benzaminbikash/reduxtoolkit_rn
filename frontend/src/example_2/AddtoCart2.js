import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header2 from "../components/Header2";
import { useDispatch, useSelector } from "react-redux";
import { DECREASECART, INCREASECART, REMOVECART } from "../reducer/cartSlice";
import { MaterialIcons } from "@expo/vector-icons";
const AddtoCart2 = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <View>
      <Header2 title="My Cart" />
      <FlatList
        data={cart}
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
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
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
                      {item.qty}
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
                </View>
              </View>
              <TouchableOpacity
                style={{ paddingRight: 20 }}
                onPress={() => dispatch(REMOVECART(item))}
              >
                <MaterialIcons name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default AddtoCart2;
