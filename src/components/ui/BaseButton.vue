<template>
    <button :class="BaseButtonClasses">
        <slot></slot>
    </button>
</template>

<script setup>
import {computed} from "vue";
import {cva} from "class-variance-authority";
import { BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_DANGER } from "@/constants";
import { isButtonTypeValid } from "@/validators";

const props = defineProps({
    type: {
        type: String,
        default: BUTTON_TYPE_NEUTRAL,
        validator: isButtonTypeValid
    },
});

const BaseButtonClasses = computed(() => {
    return cva("rounded p-3 disabled:cursor-not-allowed disabled:opacity-50", {
        variants: {
            type: {
                [BUTTON_TYPE_NEUTRAL]: "bg-gray-100 enabled:hover:bg-gray-200",
                [BUTTON_TYPE_DANGER]: "bg-red-100 enabled:hover:bg-red-600 text-white",
            },
        },
    })({type: props.type});
});
</script>
