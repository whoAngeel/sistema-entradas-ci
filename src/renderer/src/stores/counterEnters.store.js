import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref, reactive } from 'vue'


export const useCounterEntersStoreStore = defineStore('counterEnters.store', () => {
    const count = ref(0)
    const carreras = ref(['Civil', 'Química', "industrial", "Electrónica", "Administración", 'Gestión', 'Contaduria', 'Sistemas', 'Mecánica', 'Externo', 'Docente', 'Maestría'])
    const carrerasObject = reactive({
        date: new Date().toLocaleDateString('es-Es'),
        carreras: []
    })



    function incrementCount() {
        console.log('objeto: ', carrerasObject.value);
    }

    return { count, carreras, incrementCount, carrerasObject }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounterEntersStoreStore, import.meta.hot))
}
