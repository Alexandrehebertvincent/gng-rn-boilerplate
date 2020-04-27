import { RouteEnum } from './enum'

export default () => ({
	breadcrumbs: [] as string[],
	navigateTo: (routeEnum: RouteEnum) => {},
	goBack: () => {},
	currentView: ''
})
