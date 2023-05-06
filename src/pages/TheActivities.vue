<template>
    <div>
        <ul class="divide-y">
            <li
                v-for="activity in activities"
                :key="activity"
                class="flex flex-col gap-2 p-4"
            >
                <div class="flex items-center gap-2">
                    <BaseButton>
                        <TrashIcon class="h-8" />
                    </BaseButton>
                    <span class="truncate text-xl">{{ activity }}</span>
                </div>
                <div class="flex gap-2">
                    <BaseSelect
                        class="font-mono"
                        :options="periodSelectOption"
                        placeholder="h:mm"
                    />
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {TrashIcon} from "@heroicons/vue/24/outline";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";

const activities = ["Coding", "Reading", "Training"];

const periodSelectOption = [
    {value: 15, label: "0:15"},
    {value: 30, label: "0:30"},
    {value: 45, label: "0:45"},
];
</script>
