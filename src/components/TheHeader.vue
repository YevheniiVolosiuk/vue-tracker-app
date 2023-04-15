<template>
  <header class="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white p-3">
    <TheLogo></TheLogo>
    <TheHeaderProgress></TheHeaderProgress>
  </header>
</template>

<script setup>
  import TheHeaderProgress from '../components/TheHeaderProgress.vue';
  import TheLogo from '../components/TheLogo.vue';
</script>
