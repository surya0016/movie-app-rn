import { ActivityIndicator, FlatList, Image, ImageBackground, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import MovieCard from '@/components/MovieCard'

const Search = () => {
  const {
    data:movies, 
    loading, 
    error,
    refetch: loadMovies,
    reset
  } = useFetch( () => fetchMovies( {query:query} ), false)
  const [query, setQuery] = useState('')

  const handleChange = (text:string) => {
    setQuery(text)
  }

  useEffect(()=>{
    const timeoutId = setTimeout(async() => {
      if (query.trim()) {
        await loadMovies()
      } else {
        reset()
      }
    }, 500)
    
    return () => {
      clearTimeout(timeoutId)
    }
  },[query])
  
  return (
    <View className='bg-primary flex-1'>
      <Image source={images.bg} className='absolute w-full z-0' resizeMode='cover'/>
      <ScrollView
        className='flex-1 px-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{minHeight:'100%',paddingBottom: 10}}
      > 
        <Image source={icons.logo} className='mx-auto mt-20 h-10 w-12 mb-5 '/>
        {loading ? (
          <ActivityIndicator
            className='mt-10 self-center'
            size="large"
            color="#000fff"
          />
        ) : error ? (
          <Text>Error: {error?.message}</Text>
        ) : (
          <View>
            <SearchBar 
              placeholder='Search for a movie'
              onChangeText={handleChange}
            />
            <>
              <Text className='text-white font-bold text-lg mt-5 mb-3'>{query.length === 0 ? 'Search Movies' : `Results for '${query}'`}</Text>
              <FlatList
                data={movies}
                renderItem={({item})=>(
                  <MovieCard
                    {...item}
                  />
                )}
                keyExtractor={(item)=>item?.id.toString()}
                numColumns={3}
                className='pb-32 mt-2'
                scrollEnabled={false}
                columnWrapperStyle={{
                  justifyContent:'flex-start',
                  gap:20,
                  marginBottom: 10,
                  paddingRight: 5
                }}
              />
            </>
          </View>
        )}
      
      </ScrollView>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})