<template>
    <div class="flex flex-col items-center justify-center content-between h-5/6 chart-container pt-16">
        <Grafico class=" w-4/5" />
        <div>
            <a href="http://localhost:9000/api/entradas/all/export-to-excel" class="btn w-44">Descargar Datos</a>
        </div>
    </div>
</template>

<script setup>

import Grafico from '../components/Grafico1.vue'
</script>

<style scoped>
.chart-container {
    height: calc(100% - 5.2em);
}
</style>
