import Api from "../../api";

const state = {
  all: [],
  allCities: [],
  detail: {},
};
const actions = {

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
  getAllCities: async (context, params) => {
    let url = params ? `/data/2.5/group?` : `/data/2.5/group`;
    if (params) {

      if (params.id != null)
        url += `&id=${params?.id}`;
      if (params.appid != null)
        url += `&appid=${params?.appid}`;
      if (params.units != null)
        url += `&units=${params?.units}`;

    }
    let d = (await Api.get(url)).data;
    context.commit("getAllCities", d);
    return d;
  },
};


const mutations = {
  getAll(state, data) {
    state.all = data;
  },
  getAllCities(state, data) {
    state.allCities = data;
  },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
