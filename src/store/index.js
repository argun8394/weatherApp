// import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import weather from "@/store/modules/weather/weather";
import user from "@/store/modules/user/user";


// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export const store = createStore({
  modules: {
    weather,
    user
  },
});

export default { store };
