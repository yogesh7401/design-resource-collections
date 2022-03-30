<script setup lang="ts">
defineProps<{
  resource: any
}>()
</script>

<template>
  <a
    href="#"
    target="_blank"
    class="w-60 overflow-hidden rounded bg-white shadow dark:bg-gray-900 dark:shadow-white"
  >
    <img
      v-if="resource.img"
      src="https://designresources.io/wp-content/uploads/2022/03/Frame-366-1024x774.jpg"
      alt="Resource image"
      class="border-b-5 border-indigo-500 shadow"
    />
    <div
      v-else
      class="flex h-40 w-60 items-center justify-center bg-indigo-500 font-semibold uppercase text-white"
    >
      {{ resource.category }}
    </div>
    <div class="space-y-2 px-4 py-4">
      <h2 class="text-md font-semibold">{{ resource.title }}</h2>
      <p class="text-sm text-gray-600">{{ resource.description }}</p>
    </div>
  </a>
</template>
