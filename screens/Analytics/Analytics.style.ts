import { StyleSheet } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

export default StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        padding: 20
    },
    alert:{
                
    },
    title:{
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
        backgroundColor: '#121d5f',
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    topText:{
        fontSize: 14,
        color: 'white',
        padding: 5,
    },
    contentText:{
        fontSize: 20, 
        fontWeight: '600',
        color: 'white',
        padding: 5,
    },
    infoLeft:{
        width: '50%',
        borderColor: 'white',
        borderRightWidth: 1,
        paddingLeft: 30,
        paddingRight: 30,
        marginRight:30,
    }, 
    infoRight:{
        width: '45%',
        paddingRight:30,
    }, 
    textRight:{
        textAlign:'right'
    }
})