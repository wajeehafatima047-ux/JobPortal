import { ScrollView,  Text, View } from 'react-native'
import React from 'react'

const Message = () => {
  return (
    <ScrollView style={{height:"100%"}}>
    <View style={{flex:1,backgroundColor:"#f3f0f8"}}>
      <Text>Message</Text>
    </View>

    </ScrollView>
  )
}

export default Message

