import Axios from "axios"
import Store from "@/store"

const url_index = ()=> { return Store.state.url_index }

const Aplicacion ={

    index(){

        Store.commit('set_loading',true)

        Axios.get(url_index())
        .then(response=>{

            Store.state.pokemon = response.data.results

           setTimeout(()=> Store.commit('set_loading',false),500)
        
        })
        .catch(error=>{
            console.log(error.message)
        })

    },
    
    consultar(json){

        Store.commit('set_loading',true)

        Axios.get(json.url)
        .then(response=>{

            Store.state.actual_pokemon = response.data
            
            setTimeout(()=> Store.commit('set_loading',false),500)

        })
        .catch(error=>{
            console.log(error.message)
        })
        
    }


}

export default Aplicacion