import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Productdetailscreen from "./Screen/Productdetailscreen";
import Productscreen from "./Screen/productscreen";
import Shoppingcart from "./Screen/Shoppingcart";
import Navigation from "./src/data/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    {/* <Productscreen /> */}
    {/* <Productdetailscreen /> */}
    {/* <Shoppingcart /> */}
      {/* <Image source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1_1.png"}} style={styles.images}/> */}
      
      
       {/* {products.map((product)=>{
        return(
        <Image source={{uri:product.image}} style={styles.images}/>
        )
       })} */}
 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
 
});
