import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import getState from './state';

export default {
	namespaced: true,
	state: getState(),
	mutations,
	actions,
	getters,
};
