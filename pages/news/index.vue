<template>
  <div>
    <div class="grid grid-cols-2 px-32 gap-32">
      <div class="" v-for="obj in apiResponse.results" :key="obj.id">
        <div
          v-if="isHidden"
          class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-t-lg w-full max-h-52"
              :src="obj.header_image.list"
              alt=""
            />
          </a>

          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden max-h-16"
              >
                {{ obj.title }}
              </h5>
            </a>
            <p class="text-sm mb-2">
              {{ obj.updated_at }}
            </p>

            <p
              class="font-normal text-gray-700 dark:text-gray-400 overflow-hidden max-h-16"
            >
              {{ obj.excerpt }}
            </p>

            <a
              :href="`/news/${obj.slug}`"
              class="mt-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-2 px-32 gap-32">
        <div class="" v-for="obj in apiResponse.results" :key="obj.id">
          <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="rounded-t-lg w-full max-h-52"
                :src="obj.header_image.list"
                alt=""
              />
            </a>

            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden max-h-16"
                >
                  {{ obj.title }}
                </h5>
              </a>
              <p class="text-sm mb-2">
                {{ obj.updated_at }}
              </p>

              <p
                class="font-normal text-gray-700 dark:text-gray-400 overflow-hidden max-h-16"
              >
                {{ obj.excerpt }}
              </p>

              <a
                :href="`/news/${obj.slug}`"
                class="mt-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ThePagination></ThePagination>
  </div>
</template>

<script setup lang="ts">
const { data: apiResponse } = await useFetch('http://127.0.0.1:8000/news/')
</script>

<style></style>
