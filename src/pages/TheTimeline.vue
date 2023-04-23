<template>
    <div class="mt-7">
        <ul>
            <li
                class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10"
                v-for="{hour} in hours"
                :key="hour"
            >
                <a
                    href="#"
                    class="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-gray-100 px-2 font-mono text-lg text-gray-500"
                    >{{ hour }}:00</a
                >
            </li>
        </ul>
    </div>
</template>

<script setup>
import {genereteTimelineItems} from "../functions";
const hours = genereteTimelineItems();

</script>
