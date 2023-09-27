<template>
    <!-- <div class="flex content-center justify-center items-center"> -->
    <div class="rounded-xl bg-base-200 text-primary-content flex ">
        <div class="stat flex items-center text-center flex-col w-1/2">
            <span class="text-lg font-bold text-primary-content">{{ carrera }}</span>
            <span class="text-lg">Total: {{ "466" }}</span>
        </div>
        <div class="flex content-center justify-center flex-col items-center w-1/2">
            <div class="flex justify-around content-center items-center w-full">
                <button class=" btn btn-sm btn-accent">
                    <font-awesome-icon icon="minus" />
                </button>
                <span class="text-base font-medium">H</span>
                <span class="stat-value text-lg">233</span>
                <button class=" btn btn-primary">
                    <font-awesome-icon icon="plus" />
                </button>
            </div>
            <div class="flex mt-3 justify-around content-center items-center w-full">
                <button class=" btn btn-sm btn-accent">
                    <font-awesome-icon icon="minus" />
                </button>
                <span class="text-base font-medium">M</span>
                <span class="stat-value text-lg">3</span>
                <button class=" btn btn-primary">
                    <font-awesome-icon icon="plus" />

                </button>
            </div>
        </div>

    </div>
</template>

<script setup>


const props = defineProps(['carrera'])
</script>
