<template>
    <li class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
            <BaseButton :type="BUTTON_TYPE_DANGER">
                <TrashIcon class="h-8" />
            </BaseButton>
            <span class="truncate text-xl">{{ activity }}</span>
        </div>
        <div class="flex gap-2">
            <BaseSelect
                :selected="secondsToComplete"
                class="font-mono"
                :options="PERIOD_SELECT_OPTIONS"
                @select="secondsToComplete = $event"
                placeholder="h:mm"
            />
        </div>
    </li>
</template>

<script setup>
import {ref} from "vue";
import {isActivityValid} from "@/validators";
import {TrashIcon} from "@heroicons/vue/24/outline";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";
import {PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER} from "@/constants";

defineProps({
    activity: {
        type: String,
        required: true,
        validator: isActivityValid,
    },
});

const secondsToComplete = ref(null);
</script>
