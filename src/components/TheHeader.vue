<template>
    <header class="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white p-3">
        <TheLogo @click="emit('goToTimeline')" />
        <TheHeaderProgress @click="emit('goToProgress')" />
    </header>
</template>

<script setup>
import TheHeaderProgress from "../components/TheHeaderProgress.vue";
import TheLogo from "../components/TheLogo.vue";

const emit = defineEmits(['goToTimeline', 'goToProgress'])

</script>
