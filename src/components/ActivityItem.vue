<template>
    <li class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
            <BaseButton>
                <TrashIcon class="h-8" />
            </BaseButton>
            <span class="truncate text-xl">{{ activity }}</span>
        </div>
        <div class="flex gap-2">
            <BaseSelect
                :selected="secondsToComplete"
                class="font-mono"
                :options="periodSelectOption"
                @select="secondsToComplete = $event"
                placeholder="h:mm"
            />
        </div>
    </li>
</template>

<script setup>
import {ref} from "vue";
import {isString} from "@/validators";
import {TrashIcon} from "@heroicons/vue/24/outline";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";

defineProps({
    activity: {
        type: String,
        required: true,
        validator: isString,
    },
});

const periodSelectOption = [
    {value: 15, label: "0:15"},
    {value: 30, label: "0:30"},
    {value: 45, label: "0:45"},
];

const secondsToComplete = ref(null);
</script>
