import React, { useState } from 'react'
import { View, SafeAreaView, ScrollView, useWindowDimensions, VirtualizedList, StatusBar } from 'react-native';
import { Text, withTheme, Badge, Button} from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';

import styles from "./Analytics.style"

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});


const Analytics = () => {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

	return (
		<SafeAreaView style={styles.container}>
			{/* <ScrollView> */}
				
				{/* <View style={styles.alert}>
					<Badge>s
					</Badge>
					<IconButton
    icon="camera"
    color='blue'
    size={20}
    onPress={() => console.log('Pressed')}
  />
				</View> */}

				<View style={styles.title}>
					<Text style={styles.dayStatus}>Morning,</Text>
					<Text	style={styles.customerName}>Brooklyn Simmons</Text>	
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

				<View>
					<Text>123</Text>
					{/* tab bar or navigation ... */}
					<TabView
						navigationState={{ index, routes }}
						renderScene={renderScene}
						onIndexChange={setIndex}
						initialLayout={{ width: layout.width }}
					/>
					<Text>456</Text>
				</View>

			{/* </ScrollView> */}
		</SafeAreaView >
	)
}

export default withTheme(Analytics)