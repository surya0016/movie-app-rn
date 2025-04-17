import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
  placeholder: string
  onPress?: () => void;
  onChangeText?: (text:string) => void;
  value?:string
}

const SearchBar = ({placeholder, value, onPress, onChangeText}: Props) => {
  return (
    <View className='flex-row items-center bg-dark-100 rounded-full px-5 py-2'>
      <Image 
        source={icons.search} 
        className='size-5'
        resizeMode='contain'
        tintColor="#ab8bff"  
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        placeholderTextColor="#ab8bff"
        value={value}
        onChangeText={onChangeText}
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})