import { createStore } from 'vuex'

const Store = createStore({

  state(){
    return {
      
      url_index:'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
      loading: false,
      count: 999,
      pokemon:[],
      actual_pokemon:{'id':0}

    }
  },

  mutations: {

    set_loading(state,bool){
      state.loading = bool
    },

    increment(state,valor){
      state.count += valor
    }

  }

})

export default Store