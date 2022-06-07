import { StyleSheet } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

export default StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30
    },
    avatar:{
      width: 50,
      height: 50,
      borderColor: 'lightgray',
      borderWidth: 1,       
      borderRadius: 10,
      marginRight: 20
    },
    title:{
        flexDirection: 'row',
        marginLeft: 5
    },
    dayStatus:{
        opacity: 0.2,
        paddingBottom: 7
    },
    customerName:{
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 20
    },
    topInfo: {
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    topText:{
        opacity: 0.2,
        fontSize: 14,
        color: 'black',
        paddingBottom: 5,
    },
    contentText:{
      fontSize: 20, 
      fontWeight: '800',
      color: 'black',
      // padding: 5,
    },
    infoLeft:{
      width: '50%',
      borderColor: 'lightgray',
      borderRightWidth: 1,
      // paddingLeft: 30,
      // paddingRight: 30,
      marginRight:30,
    }, 
    infoRight:{
      width: '45%',
      // paddingRight:30,
    }, 
    textRight:{
      textAlign:'right'
    },
    investPan:{
      flexDirection: 'row',
      borderColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 15,
      justifyContent:'space-between',
      padding: 15,
    },
    investHeader:{
      fontSize: 18,
      marginBottom: 15
    },
    investPercent:{
      color: '#18c89c'
    },
    investPrice:{
      marginTop: 20
    },
    moreButton:{
      // backgroundColor:"#121d5f",
      // borderRadius: 15
      marginTop: 25
    },
    detail:{
      width: '100%',
      height: 200
    },
})