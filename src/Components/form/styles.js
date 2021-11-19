import { StyleSheet } from "react-native";

export default StyleSheet.create({
    formContext:{
      width:'100%',
      height:'100%',
      bottom:0,
      backgroundColor:'#ffffff',
      alignItems:'center',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      marginTop:30,
    },
    form:{
      width:'100%',
      height:'auto',
      marginTop:30,
      padding:10,

    },
    formLabel:{
      color:"#000000",
      fontSize:18,
      padding:20,
    },
    input:{
      width:'90%',
      borderRadius:50,
      backgroundColor:'#f6f6f6',
      height:40,
      margin:12,
      paddingLeft:10,
    },
    textBtn:{
      fontSize:20,
      color:'#ffffff'
    },
    btn:{
      borderRadius:50,
      alignItems:'center',
      textAlign:'center',
      width:'90%',
      backgroundColor:'#448ce3',
      paddingTop:14,
      paddingBottom:14,
      marginLeft:12,
      margin:30
        
  },
  errorMessage:{
    fontSize:12,
    color: "red",
    fontWeight:'bold',
    paddingLeft:20,
    
  }
  });