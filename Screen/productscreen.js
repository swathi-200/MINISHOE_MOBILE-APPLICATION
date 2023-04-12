import { StyleSheet, View, Image, Pressable } from "react-native";
import { FlatList } from "react-native";
import React from "react";
import products from "../src/data/product";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { productslice } from "../src/store/ProductSlice";

export default function Productscreen() {
  const navigation = useNavigation();
  const products = useSelector((state) => state.products.production);
  const dispatch = useDispatch();
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
                dispatch(productslice.actions.setselectedproduct(item.id));
              navigation.navigate("products Details");
            }}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.images}
            />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    
    width: 200,
    aspectRatio: 1,
  },
 
});
