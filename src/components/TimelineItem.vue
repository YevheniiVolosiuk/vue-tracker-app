<template>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
        <a
            href="#"
            :class="hourLinkClasses"
            >{{ props.timelineItem.hour }}:00</a
        >
        <div class="flex gap-2">
            <button
                class="rounded bg-gray-100 p-3 enabled:hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <XMarkIcon class="h-8" />
            </button>
            <select
                name=""
                id=""
                class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
            >
                <option
                    hidden
                    selected
                    disabled
                    value=""
                >
                    Reset
                </option>
                <option
                    v-for="{value, label} in options"
                    :key="value"
                    :value="value"
                >
                    {{ label }}
                </option>
            </select>
        </div>
    </li>
</template>

<script setup>
import {XMarkIcon} from "@heroicons/vue/24/outline";

const props = defineProps(["timelineItem"]);

const options = [
    {value: 0, label: "Coding"},
    {value: 1, label: "Reading"},
    {value: 2, label: "Trainig"},
];

const hourLinkClasses = [
    "absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg",
    props.timelineItem.hour === new Date().getHours()
        ? "bg-purple-900 font-black text-white"
        : "bg-grey-900 text-gray-500",
];
</script>
