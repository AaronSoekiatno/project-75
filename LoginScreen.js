import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';

export default class LoginScreen extends React.Component{
constructor(){
    super();
    this.state={
        email:'',
        password:''
    }
}

login=async(email,password)=>{
    if(email&&password){
        try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password);
            if(response){
                this.props.navigation.navigate('Transaction');
            }
        }
        catch(error){
            switch (error.code) {
                case 'auth/user-not-found':
                    Alert.alert("User doesn't exist.")
                    break;
            
                case 'auth/invalid user':
                    Alert.alert("Incorrect email or password.")
                    break;
            }
        }
    }else{
        Alert.alert('Enter email or password');
    }
}

render() {
    return(
        <KeyboardAvoidingView style={{alignItems:'center',marginTop:20}}>
            <View>
                <TextInput
                style = {styles.Box}
                placeholder="Enter you email"
                keyboardType="email-address"
                onChangeText={(text)=>{
                    this.setState({
                        email:text
                    })
                }}
                />
                <TextInput
                style = {styles.Box}
                placeholder="Enter you password"
                secureTextEntry={true}                
                onChangeText={(text)=>{
                    this.setState({
                        password:text
                    })
                }}
                />          
            </View>

            <View>
            <TouchableOpacity 
                    onPress={()=>{
                        this.login(this.state.email,this.state.password);
                    }}
                    style={styles.loginBtn}>
                        <Text style={{alignSelf:'center', marginTop:15}}>Login</Text>
                    </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}









}

const styles = StyleSheet.create({
    Box: {
      borderWidth:1.5,
      alignItems: 'center',
      justifyContent: 'center',
      width:200,
      height:50
    },
      loginBtn: {
        borderRadius:25,
        width:50,
        height:50,
        backgroundColor:'cyan'
      },
  });