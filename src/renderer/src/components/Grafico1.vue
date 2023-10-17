<template>
    <div>
        <div v-if="!datos">
            Error al cargar los datos
        </div>
        <div v-else>
            <Bar id="my-chart-id" :data="datos" />

        </div>
    </div>
</template>

<script setup>

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { onMounted, onBeforeMount, ref } from 'vue'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import { data, options } from '../utils/DataTotal'
let datos = ref(null)
let opciones = ref(null)

onMounted(async () => {
    datos.value = await data()
    opciones.value = options
    console.log("datos", datos);
})
</script>
