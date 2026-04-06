import { ScrollView,StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import {useState} from 'react'
import * as DocumentPicker from "expo-document-picker";


const pickCV = async () => {
 const result = await DocumentPicker.getDocumentAsync({
 type: "application/pdf"
});

 if (!result.canceled) {
 setCv(result.assets[0].name);
 }
};

const ApplyJobForm = () => {

    const[cv,setCv]=useState(null);
  return (

    <ScrollView style={{Weidth:"100%"}}>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#f3f0f8"}}>
      <Text></Text>
      <TouchableOpacity style={{ borderRadius: 10,}} onPress={pickCV}>

       
            <Text style={{fontSize:30}}>
 {cv ? "CV Selected: " + cv : "Upload Resume (PDF)"}
 </Text>
       
 
 </TouchableOpacity>

       <TextInput
                placeholder="Name"
                style={{
                  borderWidth: 1,
                  width: "80%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 40,
                  backgroundColor: "white",
                  paddingLeft: 10,
                }}
              />

                 <TextInput
                placeholder="email"
                style={{
                  borderWidth: 1,
                  width: "80%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 40,
                  backgroundColor: "white",
                  paddingLeft: 10,
                }}
              />
                      
                       <TextInput
                placeholder="number"
                style={{
                  borderWidth: 1,
                  width: "80%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 40,
                  backgroundColor: "white",
                  paddingLeft: 10,
                }}
              />

              <TouchableOpacity 
          style={{
            width: "50%",
            height: 50,
            backgroundColor:"#5a31f4",
            borderRadius: 10,
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
          }}>

            <Text style={{fontSize:30,color:"white"}}>Apply Job</Text>
          </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default ApplyJobForm

const styles = StyleSheet.create({})