import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView, useWindowDimensions, VirtualizedList, StatusBar } from 'react-native';
import { Text, withTheme } from 'react-native-paper';
// import { TabView, SceneMap } from 'react-native-tab-view';

import styles from "./Analytics.style"

// const FirstRoute = () => (
// 	<View>
// 		<Text>1</Text>
// 	</View>
// );

// const SecondRoute = () => (
// 	<View style={{ flex: 1, backgroundColor: '#673ab7' }} ><Text>2</Text></View>
// );

// const renderScene = SceneMap({
// 	first: FirstRoute,
// 	second: SecondRoute,
// });

const Analytics = () => {
	// const layout = useWindowDimensions();

	// const [index, setIndex] = React.useState(0)
	// const [routes] = React.useState([
	// 	{ key: 'first', title: 'First' },
	// 	{ key: 'second', title: 'Second' },
	// ])

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.topInfo}>
					<View style={styles.feed}>
						<Text>Morning,</Text>
					</View>
					<View style={styles.feed}>
						<Text>Brooklyn Simmons</Text>
					</View>
					<View style={styles.feed}>
						<View style={styles.feed}>
							<Text style={styles.feed}>
								Balance
							</Text>
							<Text style={styles.feed}>
								7900
							</Text>
						</View>
						<View style={styles.feed}>
							<Text style={styles.feed}>
								Montly profit
							</Text>
							<Text style={styles.feed}>
								10274
							</Text>
						</View>
					</View>
				</View>

				{/* <TabView
					navigationState={{ index, routes }}
					renderScene={renderScene}
					onIndexChange={setIndex}
					initialLayout={{ width: layout.width }}
				/> */}
			</ScrollView>
		</SafeAreaView >
	)
}

export default withTheme(Analytics)