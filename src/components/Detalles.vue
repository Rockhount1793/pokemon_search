
<template>

  <div @mouseleave="listado = false" class="h-screen">

      <!--- Encabezado --->
      <div class="mt-2 flex items-center space-x-1 md:space-x-2 px-0.5 md:p-3">

          <button class="h-7 px-2 shadow-lg rounded-md bg-purple-500 text-gray-200 flex items-center hover:text-white" @click="consultar_anterior()">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Anterior
          </button>
    
          <button class="h-7 px-2 shadow-lg rounded-md bg-purple-500 text-gray-200 flex items-center hover:text-white" @click="consultar_siguiente()">
              Siguiente
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              
          </button>
    
          <div @mouseenter="listado = true" @mouseleave="listado = false" class="relative shadow-lg flex items-center border border-gray-400 h-8 rounded-md px-0.5">
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            
            <input type="text" placeholder="Buscar nombre .." v-model="buscador" class="h-6 rounded border-l border-gray-300 appearance-none w-38 md:w-64 px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            
            <div @mouseleave="listado = false" v-if="buscador.length || listado" class="left-0 border border-gray-300 bg-white w-full rounded-md px-2 z-10 top-0 mt-8 absolute">
              <ul class="max-h-64 overflow-auto">
                
                <li :key="key" v-for="(sugerencia,key) in sugerencias" @click="consultar_seleccion(sugerencia)" class="cursor-pointer font-semibold text-sm hover:bg-teal-200 px-1">
                  <span class="capitalize">{{sugerencia.name}}</span>
                </li>
            
              </ul>
              
            </div>

          </div>

      </div>

      <!--- Cuerpo --->
      
      <div v-if="act_pokemon.weight" class="bg-white opacity-70 top-0 left-0 px-2 text-black">
          <h5 class="text-black capitalize text-center font-semibold text-2xl">{{act_pokemon.forms[0].name}}</h5>
      </div>

      <div v-if="act_pokemon.weight" class="flex-1 lg:h-5/6 overflow-y-auto lg:grid lg:grid-cols-3 lg:gap-3 p-2 space-y-2 lg:space-y-0 h-screen overflow-auto">
                
        <div v-if="act_pokemon.sprites.back_default" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.back_default" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>

        <div v-if="act_pokemon.sprites.back_female" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.back_female" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>

        <div v-if="act_pokemon.sprites.back_shiny" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.back_shiny" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>
        
        <div v-if="act_pokemon.sprites.back_shiny_female" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.back_shiny_female" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>
        
        <div v-if="act_pokemon.sprites.front_female" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.front_female" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>

        <div v-if="act_pokemon.sprites.front_shiny" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.front_shiny" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>
        
        <div v-if="act_pokemon.sprites.front_shiny_female" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.front_shiny_female" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>
        
        <div v-if="act_pokemon.sprites.other.dream_world.fron_default" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.other.dream_world.fron_default" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>
        
        <div v-if="act_pokemon.sprites.other.home.front_female" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.other.home.front_female" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>
        
        <div v-if="act_pokemon.sprites.other.home.front_shiny" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.other.home.front_shiny" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>
        
        <div v-if="act_pokemon.sprites.other.home.front_shiny_female" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.other.home.front_shiny_female" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>

        <div v-if="act_pokemon.sprites.other.home.front_default" class="max-h-96 col-span-1 w-auto shadow-lg border h-auto border-white rounded-md">
            
            <div class="max-h-96 bsolute">
              <img class="mx-auto" :src="act_pokemon.sprites.other.home.front_default" alt="image.pokemon" width="250" height="500" style="">
            </div>
                
        </div>

      </div>

  </div>

</template>

<script lang="js">

import { watchEffect, watch, ref, defineComponent, computed, getCurrentInstance } from "vue"
import Aplicacion from "@/controlador/index"
import Store from '@/store/index'

export default defineComponent({
  
  setup(){

    const listado = ref(false)
    const buscador = ref('')
    const seleccionado = ref({})

    const consulta_ramdon = ()=>{ Aplicacion.consultar() }

    const consultar_seleccion = (json)=>{ Aplicacion.consultar(json); buscador.value = '' }

    const consultar_anterior = ()=>{ 
      
      let todos = Store.state.pokemon
      let name_actual = act_pokemon.value.name

      var actual = todos.find((element, index)=> { if(!element.index){ element.index = index;} return (element.name == name_actual); } )
      var set_index = actual.index
      
      set_index -=1

      if(set_index >= 0){
        Aplicacion.consultar(todos[set_index]); buscador.value = '' 
      }

    }

    const consultar_siguiente = ()=>{

      let todos = Store.state.pokemon
      let name_actual = act_pokemon.value.name

      var actual = todos.find((element, index)=> { if(!element.index){ element.index = index;} return (element.name == name_actual);  } )

      var set_index = actual.index
      var all_index = todos.length
      
      set_index +=1

      if(set_index <= all_index){
        Aplicacion.consultar(todos[set_index]); buscador.value = '' 
      }

    }

    const pokemons = computed(()=> Store.state.pokemon )
    const act_pokemon = computed(()=> Store.state.actual_pokemon )

    const sugerencias = computed(()=>{

        let todos = Store.state.pokemon
        let resultados = []
        let texto = buscador.value

        if(texto.length){
        
          todos.map((index)=>{
            
            var str = index.name
				  	var res = str.includes(texto.toString().toLowerCase())
				  	if(res){ resultados.push(index) }
            
          })

        }
        else{
          resultados = todos
        }

        return resultados

    })

    watch(listado,(value) => {
      
      if(value) {
        //code
      }

    })

    return {
      listado,
      consulta_ramdon,
      buscador,
      seleccionado,
      sugerencias,
      pokemons,
      consultar_seleccion,
      consultar_anterior,
      consultar_siguiente,
      act_pokemon
      
    }

  },
 
  mounted(){
    
    if(!Store.state.pokemon.length){
        Aplicacion.index()
    }
  }

})

</script>