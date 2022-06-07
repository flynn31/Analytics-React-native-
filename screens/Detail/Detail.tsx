import React, {Component} from 'react'
import { View, SafeAreaView, Image, Button, ScrollView} from 'react-native'
import { Text, withTheme } from 'react-native-paper';
// import { Button, Badge, Tab  } from 'react-native-elements';

import styles from './Detail.style'

const Detail = () => (
  <SafeAreaView style={styles.container}>
				<ScrollView>

        <View style={styles.title}>
          <View style={styles.avatar} >
            <Image source={require('../../assets/img/header_icon.jpg')} />
          </View>

          <View>
            <Text style={styles.contentText}>GGS</Text>
            <Text style={styles.dayStatus}>Ganteng INC.</Text>
          </View>
				</View>

				<View style={styles.topInfo}>
						
						<View style={styles.infoLeft}>
              <Text style={styles.topText}>Balance</Text>
							<Text style={styles.contentText}>$7, 900</Text>
						</View>
		
						<View style={styles.infoRight}>
							<Text style={[styles.topText, styles.textRight]}>Montly profit</Text>
							<Text style={[styles.contentText, styles.textRight]}>$10, 274</Text>
						</View>
					
				</View>

        <View style={styles.investHeader}>

          {/* chart box */}
          <Image source={require('../../assets/img/cart.png')} style={styles.detail} />
        
        </View>

        <View style={styles.investHeader}>
          <Text style={styles.investHeader}>Sumary</Text>
          <View style={styles.investPan}>
            <View>
              <Text style={styles.investHeader}>Min invest</Text>
              <Text style={styles.investPercent}>+1.98%</Text>
            </View>
            <Text style={styles.investPrice}>$240.00</Text>
          </View>
        </View>

        <View>

          <Button title="View More Analytics" color="#121d5f" accessibilityLabel="View More Analytics"/>
        
        </View>

        </ScrollView>
  </SafeAreaView>		
)

export default withTheme(Detail)