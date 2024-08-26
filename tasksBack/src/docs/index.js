const basicInfo = require('./basicInfo')
const tasks = require('./tasks')
const components = require('./components')

module.exports = {
	...basicInfo,
	...tasks,
	...components,
}