import Vue from 'vue'
import Vuex from 'vuex'
import Personajes from './BojackHorseman.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Personajes,
    personajes: []
  },
  getters: {
  },
  mutations: {
    ADD_PERSONAJE:(state,id)=>{
      let personaje= state.Personajes.find((personaje) => personaje.id === id)
      
      if(!personaje) {
        alert("Personaje no encontrado")
      } else {
        state.personajes.push(personaje)
        console.log(state.personajes)
      }
      
    },
  },
  actions: {
    addPersonaje:({commit},id)=>{
      commit('ADD_PERSONAJE',id)
    }
  },
  modules: {
  }
})
