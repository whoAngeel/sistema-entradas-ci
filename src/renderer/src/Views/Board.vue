<script setup>
import { onBeforeMount, onMounted, watchEffect, ref } from 'vue'
import Card from '../components/CardCarrer.vue'
import Calendar from '../components/Calendar.vue';
import { useRegistrosStore } from '../stores/counterEnters.store'
import axios from 'axios'

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
            console.log("Ha ocurrido un error al actualizar: Error" + err);
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
})

</script>
<template>
    <main class="h-screen flex justify-around content-between items-center ">
        <section v-if="store.carreras.length === 0">
            <h2 class="text-3xl">
                Hubo un problema al cargar el registro
            </h2>
        </section>
        <section v-else class=" left-12 top-36 w-8/12 h-screen md:h-3/4 ">
            <div class="grid grid-cols-3 gap-y-10 gap-x-10 h-full content-center ">
                <div v-for="carrera in store.carreras" :id="carrera.id"
                    class="rounded-xl md:bg-base-300 md:h-28 lg:h-32 xl:h-32 content-center py-2 text-secondary-content pb-2">
                    <h2 class="text-xl font-bold text-secondary-content text-center">{{ carrera.nombre }}</h2>
                    <div class="flex w-full">
                        <div class="stat items-center text-center  flex-col w-1/3 text-base ">
                            <span class="">Total:</span>
                            <span class="text-2xl font-bold">{{ carrera.total }}</span>
                        </div>
                        <div class="flex content-center justify-center flex-col items-center w-2/3">
                            <div class="flex justify-between content-center items-center w-4/5">
                                <button class=" btn btn-accent btn-xs" @click="decrementarHombres(carrera)">
                                    <font-awesome-icon icon="minus" />
                                </button>
                                <span class="text-base font-medium">H</span>
                                <span class=" text-lg">{{ carrera.hombres }}</span>
                                <button class=" btn btn-primary btn-xs" @click="incrementarHombres(carrera)">
                                    <font-awesome-icon icon="plus" />
                                </button>
                            </div>
                            <div class="flex mt-3 justify-between content-center items-center w-4/5">
                                <button class=" btn btn-accent btn-xs" @click="decrementarMujeres(carrera)">
                                    <font-awesome-icon icon="minus" />
                                </button>
                                <span class="text-base font-medium">M</span>
                                <span class=" text-lg">{{ carrera.mujeres }}</span>
                                <button class=" btn btn-primary btn-xs" @click="incrementarMujeres(carrera)">
                                    <font-awesome-icon icon="plus" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <section class=" right-12 top-1/3 flex flex-col">
            <Calendar></Calendar>
            <div class="stats shadow mt-8">

                <div class="stat">
                    <div class="stat-title text-3xl">Total del Dia</div>
                    <div class="stat-value text-6xl">{{ store.totalDia }}</div>
                </div>
            </div>
        </section>
    </main>
</template>
