<script setup>
import Navbar from './components/Navbar.vue'
import { useRouter } from 'vue-router'
import { onBeforeMount } from 'vue'
import { useRegistrosStore } from './stores/counterEnters.store'


const router = useRouter()

onBeforeMount(() => {
  router.push('/')
})
</script>

<template>
  <Navbar></Navbar>
  <RouterView />
</template>
