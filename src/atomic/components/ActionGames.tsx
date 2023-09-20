import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { theme } from '@/atomic/theme';
import { games } from '@/constants';
import { ArrowDownTrayIcon } from 'react-native-heroicons/solid';
import { GradientButton } from './GradientButton';

const ActionGames = () => {
 const [selectedGame, setSelectedGame] = useState(1);
 return (
  <View className="mt-3">
   <View className="flex-row justify-between items-center mb-2">
    <Text style={{ color: theme.text }} className="ml-4 text-lg font-bold">
     Top Action Games
    </Text>
    <TouchableOpacity className="mr-4">
     <Text className="text-blue-600 font-bold">See All</Text>
    </TouchableOpacity>
   </View>
   <ScrollView style={{ height: 250 }} showsVerticalScrollIndicator={false}>
    {games.map((game, i: number) => {
     let bd: string =
      game.id === selectedGame ? 'rgba(255,255,255,.4)' : 'transparent';
     return (
      <TouchableOpacity
       style={{ backgroundColor: bd }}
       onPress={() => setSelectedGame(game.id)}
       key={i}
       className="mx-2 p-2 mb-2 flex-row"
      >
       <Image
        source={game.image}
        style={{ width: 80, height: 80 }}
        className="rounded-2xl"
       />
       <View className="flex-1 flex justify-center pl-3 space-y-3">
        <Text style={{ color: theme.text }} className="font-semibold">
         {game.title}
        </Text>
        <View className="flex-row space-x-3">
         <View className="flex-row space-x-1">
          <Image
           className="w-4 h-4 opacity-80"
           source={require('../../assets/images/fullStar.png')}
          />
          <Text className="text-xs text-gray-700">{game.stars} stars</Text>
         </View>
         <View className="flex-row space-x-1">
          <ArrowDownTrayIcon size={15} color={'rgb(59, 130, 246)'} />
          <Text className="text-xs text-gray-700">{game.downloads}</Text>
         </View>
        </View>
       </View>
       <View className="flex justify-center items-center">
        <GradientButton value="play" button_class="py-2 px-5" />
       </View>
      </TouchableOpacity>
     );
    })}
   </ScrollView>
  </View>
 );
};

export { ActionGames };
