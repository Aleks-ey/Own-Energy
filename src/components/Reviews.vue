<template>
    <!-- Reviews Section -->
    <div class="mt-32 mb-20 py-8 px-4 bg-gray-100">
        <div class="max-w-6xl mx-auto md:px-20">
            <h2 class="text-3xl font-bold text-center text-black">Feedback from our happy clients</h2>
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(review, index) in reviews" :key="index">
                    <div class="flex flex-col items-center p-4 bg-white shadow rounded">
                        <img :src="review.photo" alt="Client photo" class="w-16 h-16 rounded-full">
                        <p class="text-gray-600 mt-4 text-center">{{ review.text }}</p>
                        <div class="font-bold text-3xl md:text-xl mt-4 text-black">{{ review.name }}</div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination"></div>
            </swiper>
        </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  export default {
    name: 'Reviews',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            reviews: [
            {
                photo: '/assets/woman_icon.webp',
                text: 'Thanks for the wonderful bathroom remodel. It couldn`t have turned out any better. Your design team worked with my wife to draw up the plans and selected the colors, accessories and timeline. Your crew did a flawless job removing the old and installing the new. We love the new bathroom. Its modern and up to date as well as appears bigger and more open. I`m a tough guy to please but you really did a great job. We will keep you in mind for any future work and will recommend your company to friends.',
                name: 'Kelly Johnson'
            },
            {
                photo: '/assets/woman_icon.webp',
                text: 'Cabinets & Closets is organized, professional, with skilled qualified workers in every trade who are courteous and can think outside the box with regard to solving problems that they did not create. Take one look at their finished product and it speaks for itself.',
                name: 'Sophia Jones'
            },
            {
                photo: '/assets/man_profile.png',
                text: 'We wanted to take this opportunity to provide feedback and appreciation with our kitchen cabinet remodeling project that Cabinets and Closets performed.',
                name: 'Harold Green'
            },
            {
                photo: '/assets/man_profile.png',
                text: 'As promised, the remodel was completed on time and the finished product was beyond our expectation. Thanks again to Sergei, Elena, Coleen, Jean, Dave, Alex and Rubin for all of their support and assistance. We would highly recommend the C&C team to anyone who is considering any kind of cabinet remodeling project.',
                name: 'Grant Harvey'
            },
            {
                photo: '/assets/woman_icon.webp',
                text: 'Recently Cabinets & Closets completed a remodel on our master bathroom, and we wanted to let you know how pleased we were with the results. We love our Marble Palace (as we`ve been calling it), and we are proudly showing it off to everyone. The new cabinets fit in perfectly with the rest of the bathroom and we couldn`t be more happy with the design! We were particularly happy that it was finished ahead of schedule!',
                name: 'Kate Lewis'
            },
            ],
            swiperOptions: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            }
        }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>