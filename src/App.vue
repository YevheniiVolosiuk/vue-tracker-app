<template>
  <header class="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white p-3">
    <a href="#"> <img src="./assets/images/logo.png" alt="Logo" class="h-full w-48" /></a>
    <a href="#" class="text-sm">
      <div v-if="true" class="flex items-center justify-between gap-1">
        Day complete !
        <CheckCircleIcon class="w-7 text-green-500" />
      </div>
      <div v-else class="flex items-center justify-between gap-1">
        Progress: <span class="font-mono">20%</span>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>
  <main></main>
  <footer></footer>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>
