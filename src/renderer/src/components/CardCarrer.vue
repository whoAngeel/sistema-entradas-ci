<template>
    <!-- <div class="flex content-center justify-center items-center"> -->
    <div class="rounded-xl md:bg-base-300 md:h-28 lg:h-32 xl:h-40 content-center py-4 text-secondary-content ">
        <h2 class="text-2xl font-bold text-secondary-content text-center mb-2">{{ carrera }}</h2>
        <div class="flex w-full">
            <div class="stat items-center text-center  flex-col w-1/3 ">
                <span class="text-lg">Total:</span>
                <span class="text-lg stat-value">{{ carrera.total }}</span>
            </div>
            <div class="flex content-center justify-center flex-col items-center w-2/3">
                <div class="flex justify-between content-center items-center w-4/5">
                    <button class=" btn btn-accent btn-sm">
                        <font-awesome-icon icon="minus" />
                    </button>
                    <span class="text-base font-medium">H</span>
                    <span class="stat-value text-lg">233</span>
                    <button class=" btn btn-primary btn-sm">
                        <font-awesome-icon icon="plus" />
                    </button>
                </div>
                <div class="flex mt-3 justify-between content-center items-center w-4/5">
                    <button class=" btn btn-accent btn-sm">
                        <font-awesome-icon icon="minus" />
                    </button>
                    <span class="text-base font-medium">M</span>
                    <span class="stat-value text-lg">3</span>
                    <button class=" btn btn-primary btn-sm">
                        <font-awesome-icon icon="plus" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


const props = defineProps(['carrera'])
</script>
