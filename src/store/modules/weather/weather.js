import Api from "../../api";

const state = {
  all: [],
  detail: {},


};
const actions = {

  // ?lat={lat}&lon={lon}&appid={API key}
  // getAll: async (context, params) => {
  getAll: async (context, params) => {
    let url = params ? `/data/2.5/weather?` : `/data/2.5/weather`;
    if (params) {

      if (params.city != null)
        url += `&q=${params?.city}`;
      if (params.appid != null)
        url += `&appid=${params?.appid}`;
      if (params.units != null)
        url += `&units=${params?.units}`;

    }
    let d = (await Api.get(url)).data;
    context.commit("getAll", d);
    return d;
  },
};

const mutations = {
  getAll(state, data) {
    state.all = data;
    console.log(data)
  },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
