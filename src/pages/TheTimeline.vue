<template>
    <div class="mt-7">
        <ul>
            <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4"
                v-for="(item, index) in [0, 1, 2, 3, 4, 5, 6]"
                :key="index"
            >
                <a href="#" class="rounded absolute -top-4 left-1/2 -translate-x-1/2  bg-gray-100 px-2 font-mono text-lg text-gray-500">{{ index }}:00</a>
            </li>
        </ul>
    </div>
</template>

<script setup></script>
