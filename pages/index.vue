<script setup lang="ts">
import { computed, ref } from '@vue/reactivity'
import productCategories from '@/services/category.json'
import resources from '@/services/resources.json'

const selectedCategory = ref('All Products')

const categoryWithCount = computed(() => {
  return productCategories.map((category) => {
    let resourceCount = 0

    if (category.name === 'All Products') {
      resourceCount = resources.length
    } else {
      resourceCount = resources.filter((res) => {
        return res.category === category.name
      }).length
    }

    // if(resources.length)
    const finalName = `${category.name} (${resourceCount})`

    return { id: category.id, key: category.name, name: finalName }
  })
})

const filteredResources = computed(() => {
  if (selectedCategory.value !== 'All Products') {
    return resources.filter((res) => res.category === selectedCategory.value)
  }
  return resources
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-10 dark:bg-gray-900">
    <Title>Design Collections</Title>
    <TheHeader />

    <main
      class="container mx-auto mt-20 rounded bg-white p-5 dark:bg-gray-800 dark:text-white"
    >
      <section class="my-10 space-y-10 text-center">
        <div class="space-y-3">
          <h4 class="font-medium text-gray-500">
            Download resources for almost all design projects
          </h4>
          <h2 class="text-3xl font-bold">
            Design resources for all your ideas
          </h2>
        </div>
        <div class>
          <input
            type="text"
            placeholder="Search by anything"
            class="w-[600px] rounded-l border-2 bg-gray-200 px-4 py-2 shadow outline-none focus:border-indigo-500 dark:border-gray-500 dark:bg-gray-800"
          />
          <button
            class="rounded-r bg-indigo-500 px-4 py-2.5 font-semibold text-white shadow"
          >
            <font-awesome-icon icon="magnifying-glass" class="mr-2" />
            Search
          </button>
        </div>
      </section>

      <!-- cards -->
      <div class="mx-auto max-w-6xl space-y-10 p-10">
        <div class="space-x-5 text-center">
          <ChipList
            v-for="productCategory in categoryWithCount"
            :key="productCategory.id"
            v-model="selectedCategory"
            :title-key="productCategory.key"
            :title="productCategory.name"
          />
        </div>
        <div class="grid grid-cols-4 gap-10">
          <CardsResourceCard
            v-for="resource in filteredResources"
            :key="resource.id"
            :resource="resource"
          />
        </div>
      </div>
    </main>
  </div>
</template>
