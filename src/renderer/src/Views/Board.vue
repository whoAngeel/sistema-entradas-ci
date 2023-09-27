<script setup>
import Card from '../components/CardCarrer.vue'
import Calendar from '../components/Calendar.vue';
</script>
<template>
    <main class="h-screen flex justify-around content-between items-center ">
        <section class=" left-12 top-36  w-8/12 h-screen">
            <div class="grid grid-cols-3 gap-y-10 gap-x-10 h-full content-center ">
                <Card carrera="Civil" />
                <Card carrera="Quimica" />
                <Card carrera="Industrial" />
                <Card carrera="Electronica" />
                <Card carrera="Administracion" />
                <Card carrera="Gestion" />
                <Card carrera="Contaduria" />
                <Card carrera="Sistemas" />
                <Card carrera="Mecanica" />
                <Card carrera="Externo" />
                <Card carrera="Docente" />
                <Card carrera="Maestria" />

            </div>

        </section>
        <section class=" right-12 top-1/3 flex flex-col">
            <Calendar></Calendar>
            <div class="stats shadow mt-8">

                <div class="stat">
                    <div class="stat-title">Total del Dia</div>
                    <div class="stat-value">89,400</div>
                </div>

            </div>
        </section>
    </main>
</template>
