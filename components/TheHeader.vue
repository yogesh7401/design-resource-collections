<script setup lang="ts">
import { ref } from 'vue'
import { MoonIcon, LightBulbIcon } from '@heroicons/vue/solid'
import { OnClickOutside } from '@vueuse/components'
import { useStore } from '@/stores'

const globalStore = useStore()

definePageMeta({
  colorMode: 'light'
})

const isThemeDialogOpened = ref(false)

const toggleDialog = () =>
  (isThemeDialogOpened.value = !isThemeDialogOpened.value)
const closeDialog = () => (isThemeDialogOpened.value = false)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 left-0 border-b-2 border-orange-500 bg-white bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] px-6 py-4 shadow"
  >
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink :to="{ name: 'index' }" class="text-xl font-bold">
          Design Resource Collections
        </NuxtLink>
        <ul class="flex space-x-8 pl-10">
          <li>
            <a href="#">Icons</a>
          </li>
          <li>
            <a href="#">Illustrations</a>
          </li>
        </ul>
      </div>
      <div class="flex items-center space-x-10">
        <!-- <ColorScheme placeholder="..." tag="span">
                    Color mode:
                    <b>{{ $colorMode.preference }}</b>
                    <span v-if="$colorMode.preference === 'system'">
                        &nbsp;(
                        <i>{{ $colorMode.value }}</i> mode detected)
                    </span>
                </ColorScheme>-->
        <div class="relative">
          <button type="button" @click="toggleDialog">
            <MoonIcon class="h-6 w-6 text-white" />
          </button>
          <ul
            v-if="isThemeDialogOpened"
            class="absolute top-10 -right-10 overflow-hidden rounded bg-white shadow"
          >
            <!-- <ColorScheme placeholder="..." tag="span">
                            <b>{{ $colorMode.preference }}</b>
                            <span
                                v-for="color of ['system', 'light', 'dark', 'sepia']"
                                :key="color"
                                :class="{
                                    preferred: !$colorMode.unknown && color === $colorMode.preference,
                                    selected: !$colorMode.unknown && color === $colorMode.value,
                                }"
                                :value="color"
                                @click="$colorMode.preference = color"
                            >
                                <i>{{ $colorMode.value }}</i>
                            </span>
                        </ColorScheme>-->
            <OnClickOutside @trigger="closeDialog">
              <ColorScheme placeholder="..." tag="li">
                <li
                  v-for="color of ['light', 'dark', 'sepia']"
                  :key="color"
                  class="flex cursor-pointer space-x-4 px-4 py-2 capitalize hover:bg-indigo-400 hover:text-white"
                  :class="{
                    'bg-orange-500 text-white':
                      !$colorMode.unknown && color === $colorMode.preference
                  }"
                  @click="$colorMode.preference = color"
                >
                  <LightBulbIcon class="mr-3 h-6 w-6 text-gray-300" />
                  {{ color }}
                </li>
              </ColorScheme>
            </OnClickOutside>
          </ul>
        </div>
        <a
          :href="globalStore.author.github"
          class="rounded bg-orange-500 px-4 py-2 font-semibold text-white shadow"
          target="_blank"
        >Github</a>
      </div>
    </div>
  </header>
</template>
