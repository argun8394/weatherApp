import baseApi from "../../baseApi";

const state = {
  users: [],
  isAuthenticated: false,

};
const actions = {
  signup: async (context, data) => {
    let url = "/users";
    (await baseApi.post(url, data)).data;
  },
  getUsers: async (context, data) => {
    let url = "/users";
    let d = (await baseApi.get(url)).data
    context.commit('getUsers', d);
    return d
  }

};

const mutations = {
  getUsers(state, data) {
    state.users = data
  },
  setAuthenticated(state, value) {
    state.isAuthenticated = value;
  },

};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
