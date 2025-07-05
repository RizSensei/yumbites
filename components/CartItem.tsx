import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { themeColors } from "@/constants/Colors";
import { addToCart, removeDish, removeFromCart } from "@/redux/slices/cartSlice";
import * as Icon from "react-native-feather";
import { formatPrice } from "@/utils/helpers";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ name: item.name }));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveDish = () => {
    const itemIndex = 0; // This should be calculated based on the item's position
    dispatch(removeDish(itemIndex));
  };

  return (
    <View style={{
      flexDirection: 'row',  
      alignItems: 'center',           
      paddingVertical: 8,          
      paddingHorizontal: 16,          
      backgroundColor: 'white',      
      borderRadius: 24,            
      marginTop: 8, 
    }}>
      <Text style={{ color: themeColors.text, fontWeight:'bold', marginRight:10 }}>
        {item.quantity}x
      </Text>
      <Image className="h-14 w-14 rounded-full" style={{ marginRight:10 }} source={{ uri: item.image }} />
      <Text className="flex-1 font-bold text-gray-700">{item.name}</Text>
      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={handleRemoveFromCart}
          className="p-1 rounded-full"
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <Icon.Minus strokeWidth={2} height={18} width={18} stroke={"white"} />
        </TouchableOpacity>
        <Text className="px-3">${formatPrice(item.price * item.quantity)}</Text>
        <TouchableOpacity
          onPress={handleAddToCart}
          className="p-1 rounded-full"
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <Icon.Plus strokeWidth={2} height={18} width={18} stroke={"white"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleRemoveDish}
        className="p-1 rounded-full"
        style={{ backgroundColor: "red", marginLeft:5 }}
      >
        <Icon.Trash2 strokeWidth={2} height={18} width={18} stroke={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
