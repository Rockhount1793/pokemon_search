<template>

  <div class="">

    <div class="p-3">
        <img alt="Vue logo" class="mx-auto" src="@/assets/images/pokemon_logo.svg" height="250" />
    </div>

    <p class="text-center text-green-800 text-3xl">{{ msg }}</p>
    
    <div class="flex items-center">
        <span class="mx-auto"><a class="text-blue-500" href="https://pokeapi.co/" target="_blank" >Api de servicio -> https://pokeapi.co/</a></span>
    </div>

  </div>

</template>

<script setup>

    defineProps({

      msg:{ 'type': String,required: true }
    
    })

   
</script>


<style scoped>

</style>
