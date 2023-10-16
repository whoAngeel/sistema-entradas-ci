<template>
    <div class="hero flex justify-center items-center content-center h-screen">
        <Grafico1 />
        <a href="http://localhost:9000/api/entradas/all/export-to-excel" class="btn">Descargar Datos</a>
    </div>
</template>

<script setup>
import axios from 'axios'
import Grafico1 from '../components/Grafico1.vue'

</script>
