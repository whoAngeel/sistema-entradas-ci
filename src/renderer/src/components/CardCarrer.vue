<template>
    <div class="flex content-center justify-center items-center w-48 card bg-primary h-36">
        <div class="flex items-center">
            <span class="text-xl font-semibold text-primary-content">{{ carrera }}</span>
        </div>
        <div class="w-10/12">
            <div class="flex justify-between content-center items-center">
                <button class=" btn btn-sm btn-secondary ">-</button>
                <span class="text-sm">H</span>
                <span class="stat-value text-lg">233</span>
                <button class=" btn btn-sm btn-success">+</button>
            </div>
            <div class="flex mt-3 justify-between content-center items-center">
                <button class=" btn btn-sm btn-secondary">-</button>
                <span class="text-sm ">M</span>
                <span class="stat-value text-lg">233</span>
                <button class=" btn btn-sm btn-success">+</button>
            </div>
        </div>
        <div>
            <span class="stat-value text-2xl">Total: {{ "466" }}</span>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['carrera'])
</script>
