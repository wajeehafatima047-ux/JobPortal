import { ScrollView,StyleSheet, Text, View } from 'react-native'

import { useSelector } from "react-redux";
import React from 'react'

const Home = () => {
  return (
     <ScrollView style={{ height: "100%" }}>
    <View style={{flex:1, backgroundColor:"#f3f0f8"}}>
      <Text>Home</Text>
    </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})
