import React, { useState, useEffect } from 'react'
import NavigationContext from './NavigationContext'
import Home from '../../views/Home'
import getDefaultState from './default'
import { RouteEnum } from './enum'
import Other from '../../views/Other'

export default () => {
	const [ state, setState ] = useState(getDefaultState())

	useEffect(() => {
		setState((prevState) => ({
			...prevState,
			navigateTo: _navigateTo
		}))
	}, [])

	const _navigateTo = (routeEnum: RouteEnum = RouteEnum.HOME) => {
		setState((prevState) => ({
			...prevState,
			currentView: routeEnum,
			breadcrumbs: [ ...prevState.breadcrumbs, routeEnum ]
		}))
	}

	const getView = () => {
		switch (state.currentView) {
			case RouteEnum.OTHER:
				return <Other />
			case RouteEnum.HOME:
			default:
				return <Home />
		}
	}

	return <NavigationContext.Provider value={state}>{getView()}</NavigationContext.Provider>
}
