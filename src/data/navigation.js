import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Productscreen from "../../Screen/productscreen";
import Productdetailscreen from "../../Screen/Productdetailscreen";
import Shoppingcart from "../../Screen/Shoppingcart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectednumberofitems } from "../store/cartslice";
import React from "react";

export default function Navigation() {
    const selecteditem=useSelector(selectednumberofitems)
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
        <Stack.Screen
          name="products"
          component={Productscreen}
          options={({navigation})=>({
            headerRight: () => (
              <Pressable onPress={()=>navigation.navigate('cart')} style={{flexDirection:'row'}}>
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{marginLeft:5,fontWeight:'500'}}>{selecteditem}</Text>
              </Pressable>
            ),
           })}
        />
        <Stack.Screen
          name="products Details"
          component={Productdetailscreen}
          options={{ presentation: "modal" }}
        ></Stack.Screen>
        <Stack.Screen name="cart" component={Shoppingcart}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
