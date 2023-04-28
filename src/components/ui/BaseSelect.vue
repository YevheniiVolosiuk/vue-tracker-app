<template>
    <BaseButton>
        <XMarkIcon class="h-8" />
    </BaseButton>
    <select class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl">
        <option
            hidden
            selected
            disabled
            value=""
        >
            {{ placeholder }}
        </option>
        <option
            v-for="{value, label} in options"
            :key="value"
            :value="value"
            :selected="value === selected"
        >
            {{ label }}
        </option>
    </select>
</template>

<script setup>
import {XMarkIcon} from "@heroicons/vue/24/outline";
import BaseButton from "./BaseButton.vue";

defineProps({
    selected: Number,
    options: {
        type: Array,
        required: true,
        validator(options) {
            return options.every(
                ({value, label}) => typeof value === "number" && typeof label === "string"
            );
        },
    },
    placeholder: {
        type: String,
        required: true,
    },
});
</script>
