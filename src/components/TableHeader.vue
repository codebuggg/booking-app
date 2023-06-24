<template>
    <tr>
      <th v-for="column in columns" :key="column.key" :class="column.className">
        {{ column.label }}
      </th>
    </tr>
  </template>
  
  <script>
  export default {
    props: {
      columns: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  