import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SIZES, COLORS, IMAGES } from "../constants";
import {useSelector} from 'react-redux'

export default Header = () => {
    const cartData = useSelector((state) => state.reducer);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(cartData.length);
    }, [cartData]);
    return (
        <View style={style.containerHeader}>
            <Image source={IMAGES.profile_1} resizeMode="cover" style={{width:50, height:50, borderRadius:25}}/>
            <Text style={style.header}>Products</Text>
            <TouchableOpacity>
                <Image source={IMAGES.cart} resizeMode="contain" style={{width:30, height:30}} />
                {
                    cartCount > 0 ?
                    <View style={{position:'absolute', top:-13, right:-14, borderRadius:20, width:25, height:25, backgroundColor:COLORS.black}}>
                        <Text style={{paddingVertical:1,color:COLORS.white, textAlign:'center'}}>{cartCount}</Text>
                    </View>
                    : ''
                }
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    containerHeader:{
        flexDirection:'row',
        width:SIZES.width,
        height:'8%',
        backgroundColor:COLORS.primary,
        borderBottomColor:COLORS.gray,
        elevation:5,
        paddingHorizontal:SIZES.padding,
        justifyContent:'space-between',
        alignItems:'center'
    },
    header:{
        fontSize:SIZES.h1,
        color:COLORS.white
    }
})