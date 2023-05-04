<template>
    <BaseButton @click="emit('select', null)">
        <XMarkIcon class="h-8" />
    </BaseButton>
    <select
        @change="emit('select', +$event.target.value)"
        class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
    >
        <option
            hidden
            :selected="isNotSelected"
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
import BaseButton from "@/components/ui/BaseButton.vue";
import {validateSelectOptions, isUndefinedOrNull, isNumberOrNull} from "@/validators";
import {computed} from "vue";

const emit = defineEmits({
    select: isNumberOrNull,
});

const props = defineProps({
    selected: Number,
    options: {
        type: Array,
        required: true,
        validator: validateSelectOptions,
    },
    placeholder: {
        type: String,
        required: true,
    },
});

const isNotSelected = computed(() => isUndefinedOrNull(props.selected));
</script>
