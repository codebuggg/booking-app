<template>
    <!-- <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="column in columns" :key="column.key" :class="column.className">
          {{ item[column.key] }}
        </td>
      </tr>
    </tbody> -->
    <tbody>
    <tr v-for="item in items" :key="item.id">
      <td v-for="column in columns" :key="column.key" :class="column.className">
        <template v-if="column.key === 'image'">
          <img class="h-11 w-11 rounded-full" :src="item[column.key]" alt="" />
        </template>
        <template v-else>
          {{ item[column.key] }}
        </template>
      </td>
    </tr>
  </tbody>
  </template>
  
  <script>
  export default {
    props: {
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
  