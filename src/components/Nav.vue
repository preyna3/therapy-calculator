<template>
  <div class="bg-blue-400">
    <div class="container mx-auto flex items-center justify-between py-4">
      <h1 class="text-3xl font-semibold">
        <router-link to="/">Therapy Calculator</router-link>
      </h1>
      <nav>
        <ul class="flex space-x-2 font-bold">
          <router-link to="/login">
            <li
              class="py-8 px-4 hover:cursor-pointer hover:bg-blue-200 hover:text-gray-500"
            >
              Login
            </li>
          </router-link>
          <router-link to="/newpatient">
            <li
              class="py-8 px-4 hover:cursor-pointer hover:bg-blue-200 hover:text-gray-500"
            >
              New Patient
            </li>
          </router-link>
          <router-link to="/patient">
            <li
              class="py-8 px-4 hover:cursor-pointer hover:bg-blue-200 hover:text-gray-500"
            >
              Patient
            </li>
          </router-link>
          <router-link to="/sessions">
            <li
              class="py-8 px-4 hover:cursor-pointer hover:bg-blue-200 hover:text-gray-500"
            >
              Sessions
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>
