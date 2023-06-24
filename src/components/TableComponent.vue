<template>
    <div class="px-4 sm:px-6 lg:px-8 py-12">
      <!-- Table Title and Description -->
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">{{ title }}</h1>
          <p class="mt-2 text-sm text-gray-700">{{ description }}</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {{ buttonLabel }}
          </button>
        </div>
      </div>
      <!-- Table Content -->
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <TableHeader :columns="columns" />
              <TableBody :items="items" :columns="columns" />
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TableHeader from './TableHeader.vue';
  import TableBody from './TableBody.vue';
  
  export default {
    components: {
      TableHeader,
      TableBody,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      buttonLabel: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
      columns: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  