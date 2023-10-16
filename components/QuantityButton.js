import React from "react";
import { View, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

export default QuantityButton = () => {
    return (
        <View style={{flexDirection:'row', width:"30%", justifyContent:"space-between", alignItems:'center', marginVertical:5, borderRadius:16, borderWidth:1, paddingHorizontal:15, borderRadius:19}}>
            <TouchableOpacity>
                <Text style={{fontSize:25, color:COLORS.white}}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:25, color:COLORS.white}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}