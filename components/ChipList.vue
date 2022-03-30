<script setup lang="ts">

defineProps<{
    title: string
}>()
</script>

<template>
    <button
        class="px-4 py-2 rounded bg-gray-100 hover:bg-orange-500 hover:text-white border bg-transparent uppercase text-xs font-semibold text-gray-500"
    >{{ title }}</button>
</template>