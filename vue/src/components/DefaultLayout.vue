<template>

  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link v-for="item in navigation" :key="item.name" :to="item.to" :class="[(this.$route.name === item.to.name) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="flex flex-col">
                <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
                <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
              </div>
              
              <div class="mx-3 relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
              </div>
              <div @click='logout' class= "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer" >Выход</div>
              
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" @click="this.$router.push(item.to.name);" :class="[(this.$route.name === item.to.name) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
            {{ item.name }}
          </DisclosureButton>
          
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex justify-between">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
                <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
              </div>
              
            </div>
            <div @click='logout' class="block me-4 rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer">
                Выход
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <router-view></router-view>
  </div>
</template>

<script >
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default{
  components: {
    Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems,
    Bars3Icon, BellIcon, XMarkIcon
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    return{
      user : store.state.user.data,
      navigation : [
        { name: 'Панель управления', to: {name:'dashboard'}},
        { name: 'Опросы',  to: {name:'surveys'}},
      ],

      logout() {
        store.commit('logout'),
        router.push({name:'Login'})
      },
    }
  }
}
</script>