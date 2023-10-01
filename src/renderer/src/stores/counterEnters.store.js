import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref } from 'vue'


export const useCounterEntersStoreStore = defineStore('counterEnters.store', () => {
    const count = ref(0)

    function incrementCount()

    return { count }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounterEntersStoreStore, import.meta.hot))
}
