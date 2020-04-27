import React, { useState, useEffect, Fragment, useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native'
import NavigationContext from '../../context/Navigation/NavigationContext'
import { RouteEnum } from '../../context/Navigation/enum'

export default () => {
	const { navigateTo } = useContext(NavigationContext)
	const [ state, setState ] = useState({ loading: true } as any)

	useEffect(() => {
		setTimeout(() => {
			setState((prevState: any) => ({ ...prevState, loading: false }))
		}, 2500)
	}, [])

	return (
		<Fragment>
			<View style={styles.container}>
				<Text>{state.loading ? 'Loading....' : 'Yes !'}</Text>
				<Text>{state.loading ? 'Loading....' : 'Yes !'}</Text>
				<ScrollView contentContainerStyle={styles.container}>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
					<Text style={styles.item}>{state.loading ? 'Loading....' : 'Yes !'}</Text>
				</ScrollView>
			</View>
			<View style={styles.container}>
				<Button onPress={() => navigateTo(RouteEnum.OTHER)} title='Go to other view' />
			</View>
		</Fragment>
	)
}

const styles = StyleSheet.create({
	container: {},
	subContainer: {},
	item: {}
})
