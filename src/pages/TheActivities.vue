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
    </div>
</template>

<script setup>
import ActivityItem from "@/components/ActivityItem.vue";
import { validateActivities, isActivityValid } from "@/validators";

defineProps({
    activities: {
        type: Array,
        required: true,
        validate: validateActivities
    },
});

const emit = defineEmits({
    deleteActivity: isActivityValid
});
</script>
