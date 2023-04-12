import { StyleSheet, Text, Pressable, View, FlatList } from "react-native";
import React from "react";
import cart from "../src/data/cart";
import CartListItem from "../src/data/Components/CartListitem";
import { useSelector } from "react-redux";
import {
  selectsubtotal,
  selectDelivery,
  selecttotal,
} from "../src/store/cartslice";

export default function Shoppingcart() {
  const cartitems = useSelector((state) => state.cart.item);
  const deliveryfee = useSelector(selectDelivery);
  const total = useSelector(selecttotal);
  const addcart = () => {
    console.warn("add to cart");
  };
  const Shoppingcarttotal = () => {
    const subtotal = useSelector(selectsubtotal);

    return (
      <View style={styles.totalcontainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{subtotal}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>{deliveryfee} U$$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textbold}>Total</Text>
          <Text style={styles.textbold}>{total} U$$</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={cartitems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={Shoppingcarttotal}
      />
      <Pressable onPress={addcart} style={styles.button}>
        <Text style={styles.buttontext}>Checkout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  totalcontainer: {
    padding: 20,
    borderColor: "gainsboro",
    borderWidth: 1,
    margin: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textbold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "black",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
  },
  buttontext: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
});
