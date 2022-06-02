<template>
    <div class="vld-parent">
        <Loading v-model:active="isLoading"
                 color="#17ceb4"
                 loader="bars"
                 :height="80"
                 :width="100"
                 background-color="#000000"
                 :opacity="0.6"
                 >
                </Loading>

    </div>
</template>

<script lang="js">

    // active           | Boolean             | `false`              | Show loading by default when `true`, use it as `v-model:active` |
    // can-cancel       | Boolean             | `false`              | Allow user to cancel by pressing ESC or clicking outside |
    // on-cancel        | Function            | `()=>{}`             | Do something upon cancel, works in conjunction with `can-cancel`  |
    // is-full-page     | Boolean             | `true`               | When `false`; limit loader to its container^ |
    // transition       | String              | `fade`               | Transition name |
    // color            | String              | `#000`               | Customize the color of loading icon |
    // height           | Number              | *                    | Customize the height of loading icon |
    // width            | Number              | *                    | Customize the width of loading icon |
    // loader           | String              | `spinner`            | Name of icon shape you want use as loader, `spinner` or `dots` or `bars` |
    // background-color | String              | `#fff`               | Customize the overlay background color |
    // opacity          | Number              | `0.5`                | Customize the overlay background opacity |
    // z-index          | Number              | `9999`               | Customize the overlay z-index |
    // enforce-focus    | Boolean             | `true`               | Force focus on loader |
    // lock-scroll      | Boolean             | `false`              | Freeze the scrolling during full screen loader |
    // blur             | String              | `2px`                | Value for the CSS blur backdrop-filter. Set to null or an empty string to disable 
    
    import { watchEffect, watch, ref, defineComponent, computed, getCurrentInstance } from "vue"
    import Aplicacion from "@/controlador/index"
    import Store from '@/store/index'
    import Loading from '@/vue-loading-overlay/src/index'

    export default defineComponent({
        
        components: {
            Loading
        },

        setup(){

            const onCancel = ()=>{ console.log('cancelado') }

            const fullPage  = ref(true)
            const isLoading = computed(()=> Store.state.loading )

            return {
                fullPage,
                isLoading,
                onCancel
            }

        },

    })

</script>

<style scoped>
   

</style>