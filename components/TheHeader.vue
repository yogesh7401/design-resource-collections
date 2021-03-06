<script setup lang="ts">
import { ref } from 'vue'
import { OnClickOutside } from '@vueuse/components'
import { useStore } from '@/stores'

const globalStore = useStore()

const isThemeDialogOpened = ref(false)

const toggleDialog = () => {
  isThemeDialogOpened.value = !isThemeDialogOpened.value
}

const closeDialog = () => (isThemeDialogOpened.value = false)

const changeTheme = (color: string) => {
  useColorMode().preference = color
  closeDialog()
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 left-0 z-30 border-b-2 border-orange-500 bg-white bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] px-6 py-3 shadow-xl sm:py-4"
  >
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink
          :to="{ name: 'index' }"
          class="space-x-2 rounded-full bg-white px-2 py-0.5 text-xl font-bold hover:shadow-xl sm:px-4 sm:py-2"
        >
          <font-awesome-icon
            icon="biohazard"
            class="h-6 w-6 text-red-500"
          ></font-awesome-icon>
          <span class="hidden sm:inline-flex">Design Resource Collections</span>
          <span class="sm:hidden">DRC</span>
        </NuxtLink>
      </div>
      <div class="flex items-center space-x-10">
        <div class="relative">
          <OnClickOutside @trigger="closeDialog">
            <button
              type="button"
              @click="toggleDialog"
              class="flex items-center"
            >
              <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6 text-white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  class="fill-transparent"
                ></path>
                <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  class="fill-white dark:fill-white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  class="fill-white dark:fill-white"
                ></path>
              </svg>
            </button>
            <ul
              v-if="isThemeDialogOpened"
              class="absolute top-10 -right-10 overflow-hidden rounded bg-white shadow"
            >
              <ColorScheme placeholder="..." tag="li">
                <li
                  v-for="color of ['light', 'dark']"
                  :key="color"
                  class="flex w-32 cursor-pointer space-x-4 px-4 py-2 capitalize text-gray-800 hover:bg-indigo-400 hover:text-white"
                  :class="{
                    'bg-gray-300 text-white':
                      !$colorMode.unknown && color === $colorMode.preference
                  }"
                  @click="changeTheme(color)"
                >
                  {{ color }}
                </li>
              </ColorScheme>
            </ul>
          </OnClickOutside>
        </div>

        <a
          :href="globalStore.author.github"
          class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-2 font-medium text-white shadow"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="mr-2" />
          <div class="hidden sm:inline-flex">Github</div></a
        >
      </div>
    </div>
  </header>
</template>
