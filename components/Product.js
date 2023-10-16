import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, IMAGES, SIZES } from "../constants";
import { addToCart,removeFromCart } from "./redux/action";
import {useDispatch, useSelector} from 'react-redux'

export default Product = () => {

    const products = [
        {
            name:'Phone 1',
            img: IMAGES.product_1,
            price:23000
        },
        {
            name:'Phone 2',
            img: IMAGES.product_2,
            price:33000
        },
        {
            name:'Phone 3',
            img: IMAGES.product_3,
            price:1500000
        },
    ];

    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.reducer);

    function handelAddToCart(item) {
        dispatch(addToCart(item));
    }

    function handelRemoveFromCart(item) {
        dispatch(removeFromCart(item))
    }

    function showButton(item) {
        let matchFound = cartData.find(cart => cart.name === item.name);
        if(matchFound) {
            return (
                <TouchableOpacity onPress={() => handelRemoveFromCart({name:item.name, price:item.price})}>
            <Text style={{fontSize:23, color:COLORS.white, textAlign:'center'}}>Remove From Cart</Text>
        </TouchableOpacity>
            )
        } else {
            return (<TouchableOpacity onPress={() => handelAddToCart({name:item.name, price:item.price})}>
            <Text style={{fontSize:23, color:COLORS.white, textAlign:'center'}}>Add To Cart</Text>
        </TouchableOpacity>);
        }
    }

    function renderProductList() {
        return (
            <View style={{marginTop:20}}>
                <ScrollView>
                    {
                        products.map((item, index) => 
                            <View key={index} style={style.productCard}>
                                <View style={{maxHeight:200}}>
                                    <Image source={item.img} resizeMode="contain" style={{width:"100%", height:"100%", borderTopLeftRadius:19, borderTopRightRadius:19}}/>
                                </View>
                                <View style={{paddingHorizontal:15, position:'absolute', bottom:80}}>
                                    <Text style={{color:COLORS.white, fontSize:SIZES.h2}}>{item.name}</Text>
                                    <Text style={{color:COLORS.white, fontSize:SIZES.h2}}>{item.price}</Text>
                                </View>
                                <View style={{flex:1, backgroundColor:COLORS.primary, paddingVertical:10, borderBottomLeftRadius:19, borderBottomRightRadius:19}}>
                                {
                                    showButton(item)
                                }                                    
                                </View>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={style.container}>
            {renderProductList()}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex:1,
        height:SIZES.height,
        backgroundColor:COLORS.white
    },
    productCard:{
        backgroundColor:COLORS.white,
        width:"80%",
        marginHorizontal:'10%',
        marginBottom:10,
        borderRadius:19,
        borderWidth:1,
        elevation:5
    }
})