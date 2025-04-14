import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

interface TabIconProps {
  focused: boolean,
  image: any,
  icon: any,
  title: string
}

const TabIcon = ({
  focused,
  image,
  icon,
  title
}:TabIconProps) => {
  if (focused){
    return (
      <>
        <ImageBackground 
          source={image}
          className='flex-1 flex-row w-full flex min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
        >
          <Image 
            source={icon}
            className='size-5'
            tintColor="#151312"
          />
          <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
        </ImageBackground>
      </>
    )
  }else{
    return(
      <View className='size-full justify-center items-center mt-4 rounded-full'> 
        <Image source={icon} tintColor="#A8B5DB" className='size-5'/>
      </View>
    )
  }
}

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle:{
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 16,
          height: 52,
          position: "absolute",
          overflow:"hidden",
          borderWidth: 1,
          borderColor: "#0f0d23"
        }
      }}  
    >
      <Tabs.Screen
        name="index"  //name of the file
        options={{
          title: 'Movies', // the name you want to show
          headerShown: false,
          tabBarIcon: ({ focused}) => (
            <TabIcon
              focused={focused}
              image={images.highlight}
              icon={icons.home}
              title='Home'
            />
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              image={images.highlight}
              icon={icons.search}
              title="Search"
            />
          )
        }}
        />
      <Tabs.Screen
        name='saved'
        options={{
          title:"Saved",
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              image={images.highlight}
              icon={icons.save}
              title="Saved"
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              image={images.highlight}
              icon={icons.person}
              title="Profile"
            />
          )
        }}
      />
    </Tabs>
  )
}

export default _Layout