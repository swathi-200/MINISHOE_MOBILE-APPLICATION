import { StyleSheet, FlatList, View,Image ,Text,useWindowDimensions,ScrollView,Pressable} from 'react-native'
import React from 'react'
import products from '../src/data/product';
import { useSelector ,useDispatch} from 'react-redux';
import { cartslice } from '../src/store/cartslice';
export default function Productdetailscreen() {
   const product=useSelector((state)=>state.products.selectedproducts);
   const dispatch=useDispatch();
    const {width}=useWindowDimensions();
    const addcart=()=>{
         dispatch(cartslice.actions.addCartItem({product}))
          console.warn("add to cart")
    }
  return (
    <View>
        <ScrollView>
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          // console.log("hhhhhhhhhhhhhhhhhh",item.image)
          <Image
            source={{
              uri: item
            }}
            style={{width,aspectRatio:1}}
          />
        )}
          horizontal
          showsHorizontalScrollIndicator={false} //disaled the scroll
          pagingEnabled //it is in center when scrolling
      />
      <View style={{padding:20}}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>


    </View>
    </ScrollView>
    <Pressable onPress={addcart} style={styles.button}>
        <Text style={styles.buttontext}>Add to Cart</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
   title:{
      fontSize:34,
      fontWeight:'500',
      marginVertical:10,
   },
   price:{
    fontWeight:'500',
    fontSize:16,
    letterSpacing:1.5

   },
   description:{
    marginVertical:10,
    fontSize:18,
    lineHeight:30,
    fontWeight:'300',
   },
   button:{
        position:'absolute',
        bottom:0,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'black',
        padding:20,
        borderRadius:100,
        justifyContent:'center'
   },
   buttontext:{
      color:'white',
      fontWeight:'500',
      fontSize:16,
      textAlign:'center'
   }
})