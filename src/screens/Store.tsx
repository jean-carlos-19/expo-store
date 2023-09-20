import React from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Bars3BottomLeftIcon, BellIcon } from 'react-native-heroicons/solid';
import { theme } from '@/atomic/theme';
import { ActionGames, Featured, Categories } from '@/atomic/components';
const { height } = Dimensions.get('screen');

const Store = () => {

 return (
  <LinearGradient
   style={{ height: height }}
   colors={['rgba(58,131,244,0.4)', 'rgba(9,181,211,0.4)']}
   className="w-full flex-1"
  >
   <StatusBar
    backgroundColor={'rgba(58,131,244,.5)'}
    barStyle={'light-content'}
   />
   <View>
    <View className="container">
     <View className="flex-row justify-between items-center px-4">
      <Bars3BottomLeftIcon color={theme.text} size={30} />
      <BellIcon color={theme.text} size={30} />
     </View>
    </View>

    {/* categories */}
    <Categories />

    {/* featured row */}
    <Featured />

    {/* top action games list */}
    <ActionGames />
   </View>
  </LinearGradient>
 );
};

export { Store };
