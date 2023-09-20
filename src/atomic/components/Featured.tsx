import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { GameCard } from './GameCard';
import { featured } from '@/constants';
import { theme } from '@/atomic/theme';

const Featured = () => {
 return (
  <View className="mt-3 space-y-4">
   <Text style={{ color: theme.text }} className="ml-4 text-lg font-bold">
    Featured Games
   </Text>
   <View className="pl-4">
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     {featured.map((item, i: number) => (
      /* game card component */
      <GameCard item={item} key={i} />
     ))}
    </ScrollView>
   </View>
  </View>
 );
};

export { Featured };
