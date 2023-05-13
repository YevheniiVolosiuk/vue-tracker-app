<template>
    <div>
        <ul class="divide-y">
            <ActivityItem
                v-for="activity in activities"
                :key="activity"
                :activity="activity"
                @delete="emit('deleteActivity', activity)"
            />
        </ul>

        <form @submit.prevent="emit('createActivity', newActivity)" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
            <input
                :value="newActivity"
                @input="newActivity = $event.target.value"
                type="text"
                class="w-full rounded border px-4 text-xl"
                placeholder="Activity name"
            />
            <BaseButton>
                <PlusIcon class="h-8" />
            </BaseButton>
        </form>
    </div>
</template>

<script setup>
import {PlusIcon} from "@heroicons/vue/24/outline";
import ActivityItem from "@/components/ActivityItem.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import {validateActivities, isActivityValid} from "@/validators";

defineProps({
    activities: {
        type: Array,
        required: true,
        validate: validateActivities,
    },
});

const emit = defineEmits({
    createActivity: isActivityValid,
    deleteActivity: isActivityValid,
});

let newActivity = "";
</script>
