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
  <main class="flex flex-grow flex-col">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque rem iste magni fugit illo
    minima aliquam a, omnis delectus, excepturi quaerat? Cumque laboriosam accusamus temporibus
    voluptatum veritatis mollitia error, sint ducimus consequatur dicta earum ullam recusandae
    fugit. Repudiandae nisi sunt temporibus fugiat similique omnis distinctio culpa magnam a eaque.
    Inventore dolore at illo sed earum aliquid quae magnam nulla eum, impedit iusto minima excepturi
    corporis repudiandae asperiores iste magni obcaecati odit. Impedit sequi quo esse perferendis
    eligendi commodi provident sunt sed ullam quisquam et distinctio, dicta quis cupiditate optio
    blanditiis quaerat magni odit necessitatibus inventore! Numquam a quo quisquam eos?
  </main>
  <nav class="sticky bottom-0 z-20">
    <ul class="flex items-center justify-around border-t">
      <li class=" flex-1 ">
        <a href="#timeline" class="flex flex-col items-center p-2 text-xs capitalize">
          <ClockIcon class="w-6 h-6" />
          timeline</a
        >
      </li>
      <li class="flex-1">
        <a href="#activities" class="flex flex-col items-center p-2 text-xs capitalize">
          <ListBulletIcon class="w-6 h-6" />
          activities
        </a>
      </li>
      <li class="flex-1">
        <a href="#progress" class="flex flex-col items-center p-2 text-xs capitalize">
          <ChartBarIcon class="w-6 h-6" />
          progress
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
</script>
