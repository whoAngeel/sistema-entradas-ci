<script>
import {
  Chart,
  initTE,
} from "tw-elements";

initTE({ Chart });
</script>

<template>
  <nav
    class="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="ml-2">
        <a class="text-xl font-semibold text-neutral-800 dark:text-neutral-200" href="#">Navbar</a>
      </div>
    </div>
  </nav>


  <div class="mx-auto w-3/5 overflow-hidden">
    <canvas data-te-chart="bar" data-te-dataset-label="Traffic"
      data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
      data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]">
    </canvas>
  </div>
</template>

<style>
</style>
