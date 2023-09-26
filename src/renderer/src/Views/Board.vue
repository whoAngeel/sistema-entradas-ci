<script setup>
import Card from '../components/CardCarrer.vue'
import Calendar from '../components/Calendar.vue';
</script>
<template>
    <main class="relative h-screen">
        <section class="absolute left-12 top-36   w-8/12">
            <div class="grid  grid-cols-3 gap-10">
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
        <section class="absolute right-12 top-1/3 flex flex-col">
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
