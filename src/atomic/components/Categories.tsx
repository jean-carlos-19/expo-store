import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { GradientButton } from './GradientButton';
import { categories } from '@/constants';
import { theme } from '@/atomic/theme';

const Categories = () => {
 const [activeCategory, setActiveCategory] = useState('Action');
 return (
  <View className="mt-3 space-y-3">
   <Text style={{ color: theme.text }} className="ml-4 text-3xl font-bold">
    Browse Games
   </Text>
   <View className="pl-4">
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     {categories.map((category: string, i: number) => {
      return category === activeCategory ? (
       /* show gradient category */
       /* lets create gradient category button */
       <GradientButton button_class="mr-2" value={category} key={i} />
      ) : (
       /* show normal category */
       <TouchableOpacity
        onPress={() => setActiveCategory(category)}
        key={i}
        className="bg-blue-200 p-3 px-4 rounded-full mr-2"
       >
        <Text>{category}</Text>
       </TouchableOpacity>
      );
     })}
    </ScrollView>
   </View>
  </View>
 );
};

export { Categories };
