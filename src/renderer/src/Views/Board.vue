<script setup>
import { onBeforeMount, onMounted, watchEffect, ref } from 'vue'
import Card from '../components/CardCarrer.vue'
import Calendar from '../components/Calendar.vue';
import { storeToRefs } from 'pinia'
import { useRegistrosStore } from '../stores/counterEnters.store'
import { fetchRegistro } from '../backend/api'

const store = useRegistrosStore()

const API_URL = `http://localhost:9000/api/entradas/`

const incrementarHombres = (carrera) => {
    carrera.hombres++;
    carrera.total++;
    axios.patch(`${API_URL}inc/${carrera.name}/hombres`).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log("Ha ocurrido un error al actualizar");
    })
    // store.fetchTotalDia(); // Actualizar el total del día
}

const decrementarHombres = (carrera) => {
    if (carrera.hombres > 0) {
        carrera.hombres--;
        carrera.total--;
        axios.patch(`${API_URL}dec/${carrera.name}/hombres`).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log("Ha ocurrido un error al actualizar");
        })
        // store.fetchTotalDia(); // Actualizar el total del día
    }
}

const incrementarMujeres = (carrera) => {
    carrera.mujeres++;
    carrera.total++;
    axios.patch(`${API_URL}inc/${carrera.name}/mujeres`).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log("Ha ocurrido un error al actualizar");
    })
    // store.fetchTotalDia(); // Actualizar el total del día
}

const decrementarMujeres = (carrera) => {
    if (carrera.mujeres > 0) {
        carrera.mujeres--;
        carrera.total--;
        axios.patch(`${API_URL}dec/${carrera.name}/mujeres`).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log("Ha ocurrido un error al actualizar");
        })
        // store.fetchTotalDia(); // Actualizar el total del día
    }
}

onMounted(() => {
    store.fetch()
    store.fetchTotalDia()
})

</script>
<template>
    <main class="h-screen flex justify-around content-between items-center ">
        <section class=" left-12 top-36 w-8/12 h-screen md:h-3/4 ">
            <div class="grid grid-cols-3 gap-y-10 gap-x-10 h-full content-center ">
                <Card v-for="carrera in store.carreras" :key="carrera.id" carrera="carrera" />

            </div>

        </section>

        <section class=" right-12 top-1/3 flex flex-col">
            <Calendar></Calendar>
            <div class="stats shadow mt-8">

                <div class="stat">
                    <div class="stat-title">Total del Dia</div>
                    <div class="stat-value">{{ store.totalDia }}</div>
                </div>


            </div>
        </section>
    </main>
</template>
