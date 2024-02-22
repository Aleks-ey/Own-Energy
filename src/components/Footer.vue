<template>
    <footer class="bg-black text-white py-8">
        <div class="max-w-6xl mx-auto px-4 flex flex-wrap justify-between">
            <!-- Logo and about section -->
            <div class="w-full md:w-1/4 mb-6 md:pr-6 md:mb-0">
                <div class="flex items-center text-xl mb-4 justify-center">
                    <img src="../../OwnEnergyLogo.svg" alt="Own Energy Logo" class="hidden md:block mr-2 h-52 w-52"/>
                    <img src="../../OwnEnergyLogo.webp" alt="Own Energy Logo" class="block md:hidden mr-2 h-52 w-52"/>
                </div>
            </div>
    
            <!-- Contact Information -->
            <div class="w-full md:w-1/3 mb-6 md:pr-6 md:mb-0 flex flex-col justify-center">
                <h3 class="text-lg font-bold mb-4">Contact Us</h3>
                <p class="text-gray-400">
                    Email: info.cabinetsandclosets@gmail.com
                </p>
                <p class="text-gray-400">
                    Phone: (561) 221-2681
                </p>
                <!-- <p class="text-gray-400">
                    Appointments: Cabinets&Closets.com
                </p> -->
            </div>
    
            <!-- Services -->
            <div class="w-full md:w-1/3 flex flex-col justify-center">
                <p class="text-gray-400">
                    We will warranty our labor for one year after the completion of your project. No questions asked. We want to earn not just your business, but the business of every person you know. The only way to do that is by doing things right, and standing behind our work.
                </p>
                <p class="text-gray-400 mt-3">Icons made by Pixel perfect from www.flaticon.com</p>
            </div>
        </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    setup() {
      return {
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles or overrides if necessary */
  </style>
  