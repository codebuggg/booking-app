<template>
    <TableComponent
      :title="title"
      :description="description"
      :buttonLabel="buttonLabel"
      :items="people"
      :columns="columns"
    />
  </template>
  
  <script setup>
  import TableComponent from './TableComponent.vue';
  const title = 'Events';
  const description = 'All events';
  const buttonLabel = 'Add Event';
  
  const people = [
  {
      name: 'Sip and Paint',
      description: 'Front-end Developer',
      price: 'ghs 50',
      date: '12th June, 2023',
      quantity: '200',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Sip and Paint',
      description: 'Front-end Developer',
      price: 'ghs 50',
      date: '12th June, 2023',
      quantity: '200',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];
  
  const columns = [
    { key: 'Clients Name', label: 'Name', className: 'py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0' },
    { key: 'Email', label: 'Description', className: 'px-3 py-3.5 text-left text-sm font-semibold text-gray-900' },
    { key: 'Phone', label: 'Status', className: 'px-3 py-3.5 text-left text-sm font-semibold text-gray-900' },
    { key: 'Event', label: 'Quantity', className: 'px-3 py-3.5 text-left text-sm font-semibold text-gray-900' },
    { key: 'Date', label: 'Edit', className: 'relative py-3.5 pl-3 pr-4 sm:pr-0' },
  ];
  </script>