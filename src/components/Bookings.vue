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
  const title = 'Bookings';
  const description = 'All bookings';
  const buttonLabel = 'New Booking';
  
  const people = [
  {
      client_name: 'Kweku Nimo',
      email: 'hello@test.com',
      phone: '0244 444 444',
      date: '12th June, 2023',
      event: 'Sip ans Paint',
    },
    {

        client_name: 'Kweku Nimo',
        email: 'hello@test.com',
        phone: '0244 444 444',
        date: '12th June, 2023',
        event: 'Sip ans Paint',
    },
  ];
  
  const columns = [
    { key: 'client_name', label: 'Name', className: 'py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0' },
    { key: 'email', label: 'Email', className: 'px-3 py-3.5 text-left text-sm font-semibold text-gray-900' },
    { key: 'phone', label: 'Phone', className: 'px-3 py-3.5 text-left text-sm font-semibold text-gray-900' },
    { key: 'event', label: 'Event', className: 'px-3 py-3.5 text-left text-sm font-semibold text-gray-900' },
    { key: 'date', label: 'Date', className: 'px-3 py-3.5 text-left text-sm font-semibold text-gray-900' },
  ];
  </script>