import { ActivityIndicator, FlatList, Image, ImageBackground, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import MovieCard from '@/components/MovieCard'

const Search = () => {
  const {data:movies, loading, error} = useFetch( () => fetchMovies({query:searchQuery}), false )
  const [searchQuery, setSearchQuery] = useState('')
  // const [debouncedQuery, setDebouncedQuery] = useState('')
  // const [movies, setMovies] = useState([])
  // const [moviesLoading, setMoviesLoading] = useState(false)
  // const [moviesError, setMoviesError] = useState<Error | null>(null)

  const handleChange = (text:string) => {
    setSearchQuery(text)
  }

  // useEffect(()=>{
  //   const handler = setTimeout(()=>{
  //     setDebouncedQuery(query)
  //   }, 500)

  //   return () => {
  //     clearTimeout(handler)
  //   }
  // },[query])

  // useEffect(()=>{
  //   const fetchData = async() => {
  //     try {
  //       setMoviesLoading(true)
  //       setMoviesError(null)
  //       const response = await fetchMovies({ query: debouncedQuery})
  //       setMovies(response)
  //     } catch (error:any) {
  //       setMoviesError(error)
  //     } finally {
  //       setMoviesLoading(false)
  //     }
  //   }

  //   fetchData()
  // },[debouncedQuery])
  return (
    <View className='bg-primary flex-1'>
      <Image source={images.bg} className='absolute w-full z-0' resizeMode='cover'/>
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
          justifyContent:'center',
          gap:16,
          marginVertical:16
        }}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20'>
              <Image source={icons.logo} className='w-12 h-10'/>
            </View>
            <View className='my-5'>
              <SearchBar 
                placeholder='Seach movies....'
                onChangeText={handleChange}
                value={searchQuery}
              />
            </View>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#000fff"
                className='my-3'
              />
            )}

            {error && (
              <Text className='text-red-500 px-5 my-3'>
                Error: {error.message}
              </Text>
            )}

            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className='text-xl text-white font-bold'>
                Search Result for {searchQuery}
                <Text className='text-accent'>{searchQuery}</Text>
              </Text>
            )}
          </>
        }
      />
    </View>
  )
}

export default Search
 