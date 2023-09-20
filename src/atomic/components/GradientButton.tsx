import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface gradient_button_props {
 button_class: string;
 value: string;
}
const GradientButton = (props: gradient_button_props) => {
 const { button_class, value } = props;

 return (
  <LinearGradient
   colors={['rgba(9,181,211,0.9)', 'rgba(58,131,244,0.9)']}
   end={{ x: 1, y: 1 }}
   start={{ x: 0.1, y: 0.2 }}
   className={`rounded-full ${button_class}`}
  >
   <TouchableOpacity className={`p-3 px-4 ${button_class}`}>
    <Text className="text-white font-bold">{value}</Text>
   </TouchableOpacity>
  </LinearGradient>
 );
};

export { GradientButton };
