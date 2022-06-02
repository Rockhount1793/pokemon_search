
<template>
    <Cargador></Cargador>
    <div class="container w-full mx-auto" :class="color_random">

        <div class="pb-2">
      
            <Encabezado msg="Tu Pokémon Favorito"></Encabezado>
      
            <div class="mt-2 mx-auto flex items-center">
              
              <div class="mx-auto space-x-3 text-xl">
      
                  <RouterLink :class="current_view_class('Home')" class="border border-gray-400 rounded-lg px-2 shadow-lg" to="/">Detalles</RouterLink>
              
                  <RouterLink :class="current_view_class('Detalle')" class="border border-gray-400 rounded-lg px-2 shadow-lg" to="/detalle">Imagenes</RouterLink>
              
              </div>
      
            </div>
      
        </div>

        <div class="mx-auto container">
            <RouterView></RouterView>
        </div>

    </div>
</template>

<script lang="js">

import { RouterLink, RouterView } from 'vue-router'
import Cargador from '@/components/Cargador.vue'
import Encabezado from '@/components/Encabezado.vue'

import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Store from './store'

export default defineComponent({

    components:{
      Encabezado, Cargador
    },

    setup(){

      const path_name = computed(()=> { return useRoute().name})

      const current_view_class = (ruta)=>{ 

          let color = ''

          switch (ruta) {

            case 'Home': color='text-gray-100  hover:text-white bg-gradient-to-r from-violet-300 to-violet-500'; break;
            case 'Detalle': color='text-gray-100 hover:text-white bg-gradient-to-r from-violet-500 to-violet-300'; break;
          
            default: color='text-green-800'; break;
          }

          return color
      }

      const act_pokemon = computed(()=> Store.state.actual_pokemon )

      const color_random = computed(()=>{
  
          let temp = ''

          let numr = ''

          var number_s = act_pokemon.value.id

          if(number_s.toString().length >= 2){ numr = number_s.toString().slice(-1) }else{ numr = number_s.toString().charAt(0) }

          switch(numr.toString()){
            
            case '0': temp = 'bg-gradient-to-r from-rose-200 to-rose-400'; break;
            case '1': temp = 'bg-gradient-to-r from-yellow-200 to-yellow-400'; break;
            case '2': temp = 'bg-gradient-to-r from-pink-200 to-pink-400'; break;
            case '3': temp = 'bg-gradient-to-r from-blue-200 to-blue-400'; break;
            case '4': temp = 'bg-gradient-to-r from-purple-200 to-purple-400'; break;
            case '5': temp = 'bg-gradient-to-r from-lime-200 to-lime-400'; break;
            case '6': temp = 'bg-gradient-to-r from-green-200 to-green-400'; break;
            case '7': temp = 'bg-gradient-to-r from-cyan-200 to-cyan-400'; break;
            case '8': temp = 'bg-gradient-to-r from-indigo-200 to-indigo-300'; break;
            case '9': temp = 'bg-gradient-to-r from-teal-200 to-teal-400'; break;
             
          }

          return temp

      })

      return{
        path_name,
        current_view_class,
        color_random,
        act_pokemon
      }

    }


})

</script>

<style scoped>

</style>>
