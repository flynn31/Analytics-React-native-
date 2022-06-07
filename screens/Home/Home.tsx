import React from 'react'
import { View, SafeAreaView, Image, Button, ScrollView } from 'react-native';
import { Text, withTheme } from 'react-native-paper';

// import Button from '../../components/Button/Button'
import styles from './Home.style'

const Home = ({ theme, navigate }) => {
	const handle = () => {
		navigate.navigate('/')
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				
			<View style={[styles.nestItem, styles.headerIcon]}>
				<Image source={require('../../assets/img/header_icon.jpg')} />
			</View>
			<View style={[styles.nestItem, styles.fontWeight900]}>
				<Text style={styles.text25}>Enjoy investing, in a simple and easy way</Text>
			</View>
			<View style={styles.nestItem}>
				<Text style={styles.text16}>Amet minim mollit non deserunt ullamcoest sit aliqua dolor do amet sint.</Text>
			</View>
			<View style={styles.bottom}>
				{/* <Button Title="Get Started" color="#121d5f" /> */}
				<Button title="Get started" color="#121d5f" accessibilityLabel="Get started"/>
			</View>
			</ScrollView>
		</SafeAreaView >
	)
}

export default withTheme(Home);