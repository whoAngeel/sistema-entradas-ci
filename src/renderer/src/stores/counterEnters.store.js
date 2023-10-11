import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
import { useFetch } from '@vueuse/core'


export const useRegistrosStore = defineStore('registrosStore', () => {
    const carreras = ref([])
    // const totalDia = ref(0)
    const registros = ref([])
    const registro = ref({})
    const totalDia = computed(() => {
        return carreras.value.reduce((total, carrera) => {
            return total + carrera.hombres + carrera.mujeres;
        }, 0);
    });
    const fetch = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/entradas')
            console.log(response.data);
            carreras.value = response.data.carreras
        } catch (error) {
            console.log('Error al obtener los datos', error);
        }
    }

    const fetchRegistro = async () => {
        try {
            const res = await axios.get('http://localhost:9000/api/entradas')
            registro.value = res.data
        } catch (error) {
            console.log("error");
        }
    }
    const fetchRegistros = async () => {
        try {
            const res = await axios.get('http://localhost:9000/api/entradas/all')
            registros.value = res.data
        } catch (error) {
            console.log("Error registros");
        }
    }

    return {
        carreras,
        fetch,
        totalDia,
        registro,
        fetchRegistro,
        registros,
        fetchRegistros
    }
})
