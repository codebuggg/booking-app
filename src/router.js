import {createRouter, createWebHistory} from 'vue-router';

import Events from './components/Events.vue';
import Bookings from './components/Bookings.vue';
// Import other dashboard item components


const routes = [
    {
        path: '/',
        name: 'Events',
        component: Events,
      },
    {
        path: '/events',
        name: 'Events',
        component: Events,
    },
    {
        path: '/bookings',
        name: 'Bookings',
        component: Bookings,
    },
  // Add other routes for dashboard items
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
