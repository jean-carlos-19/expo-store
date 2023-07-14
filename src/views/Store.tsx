import React, { useState } from 'react'
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowDownTrayIcon, Bars3BottomLeftIcon, BellIcon } from 'react-native-heroicons/solid'
import { theme } from '@/global/theme'
import { categories, featured, games } from '@/global/data'
import { GameCard, GradientButton } from '@/atomic/component'
const { height } = Dimensions.get("screen");

const Store = () => {

    const [activeCategory, setActiveCategory] = useState('Action');
    const [selectedGame, setSelectedGame] = useState(1);

    return (
        <LinearGradient
            style={{ height: height }}
            colors={["rgba(58,131,244,0.4)", "rgba(9,181,211,0.4)"]}
            className='w-full flex-1'
        >
            <StatusBar backgroundColor={"rgba(58,131,244,.5)"} barStyle={"light-content"} />
            <SafeAreaView>
                <View className="container">
                    <View className="flex-row justify-between items-center px-4">
                        <Bars3BottomLeftIcon color={theme.text} size={30} />
                        <BellIcon color={theme.text} size={30} />
                    </View>
                </View>

                {/* categories */}
                <View className="mt-3 space-y-3">
                    <Text
                        style={{ color: theme.text }}
                        className='ml-4 text-3xl font-bold'
                    >
                        Browse Games
                    </Text>
                    <View className="pl-4">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                categories.map((category: string, i: number) => {
                                    return category === activeCategory ? (
                                        /* show gradient category */
                                        /* lets create gradient category button */
                                        <GradientButton button_class='mr-2' value={category} key={i} />
                                    ) : (
                                        /* show normal category */
                                        <TouchableOpacity
                                            onPress={() => setActiveCategory(category)}
                                            key={i}
                                            className='bg-blue-200 p-3 px-4 rounded-full mr-2'
                                        >
                                            <Text>
                                                {category}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </View>

                {/* featured row */}

                <View className="mt-3 space-y-4">
                    <Text
                        style={{ color: theme.text }}
                        className="ml-4 text-lg font-bold">
                        Featured Games
                    </Text>
                    <View className="pl-4">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                featured.map((item, i: number) => (
                                    /* game card component */
                                    <GameCard item={item} key={i} />
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>

                {/* top action games list */}

                <View className="mt-3">
                    <View className="flex-row justify-between items-center mb-2">
                        <Text
                            style={{ color: theme.text }}
                            className="ml-4 text-lg font-bold">
                            Top Action Games
                        </Text>
                        <TouchableOpacity
                            className='mr-4'
                        >
                            <Text className='text-blue-600 font-bold'>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        style={{ height: 250 }}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            games.map((game, i: number) => {
                                let bd: string = game.id === selectedGame ? "rgba(255,255,255,.4)" : "transparent"
                                return (
                                    <TouchableOpacity
                                        style={{ backgroundColor: bd }}
                                        onPress={() => setSelectedGame(game.id)}
                                        key={i}
                                        className="mx-2 p-2 mb-2 flex-row">
                                        <Image
                                            source={game.image}
                                            style={{ width: 80, height: 80 }}
                                            className='rounded-2xl'
                                        />
                                        <View className='flex-1 flex justify-center pl-3 space-y-3'>
                                            <Text
                                                style={{ color: theme.text }}
                                                className="font-semibold"
                                            >
                                                {game.title}
                                            </Text>
                                            <View className='flex-row space-x-3' >

                                                <View className="flex-row space-x-1">
                                                    <Image
                                                        className='w-4 h-4 opacity-80'
                                                        source={require("../../assets/images/fullStar.png")} />
                                                    <Text className="text-xs text-gray-700">
                                                        {game.stars} stars
                                                    </Text>
                                                </View>
                                                <View className='flex-row space-x-1'>
                                                    <ArrowDownTrayIcon size={15} color={"rgb(59, 130, 246)"} />
                                                    <Text className="text-xs text-gray-700">
                                                        {game.downloads}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View className='flex justify-center items-center'>
                                            <GradientButton value='play' button_class='py-2 px-5' />
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>

            </SafeAreaView>
        </LinearGradient>
    )
}

export { Store }
