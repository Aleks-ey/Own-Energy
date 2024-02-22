<template>
    <div class="p-6">
      <h2 class="text-4xl text-center font-bold mt-6 mb-12">Planning your project is important!</h2>
      <div class="space-y-3">
        <div v-for="(process, index) in process" :key="index" class="border rounded-lg bg-white">
          <button
            @click="toggle(index)"
            class="w-full text-left px-4 py-2 rounded-lg flex justify-between items-center"
          >
            <span class="font-bold">{{ process.question }}</span>
            <span>{{ process.open ? '-' : '+' }}</span>
          </button>
          <div v-if="process.open" class="px-4 py-2 border-t-0">
            <div v-if="process.useBulletPoints">
              <ul class="list-disc pl-5">
                <li v-for="(item, idx) in process.answer" :key="`item-${idx}`">{{ item }}</li>
              </ul>
            </div>
            <div v-else>
              {{ process.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
    export default {
      data() {
        return {
          process: [
              {
                question: 'Initial Consultation',
                answer: 'A free consultation can be done at your home or over the phone at a time that is convenient for you. At this time you tell us what it is you want from your new project, such as the features and options that are must-haves, and we will discuss your budget and timeline.',
                open: false,
                useBulletPoints: false,
              },
              {
                question: 'Design Consultation',
                answer: 'Our designer will present 3D views to assist you in visualizing the best use of the space. Once the design has been determined we will finalize the design and begin preparing a more detailed proposal.',
                open: false,
                useBulletPoints: false,
              },
              {
                question: 'Project Proposal',
                answer: 'Based on the prior discussions and consultations, a final quote and contract will be presented, and we’ll schedule your project according to the contracted plan, specifications, and timeline.',
                open: false,
                useBulletPoints: false,
              },
              {
                question: 'Material Selections',
                answer: 'Materials can be easily selected from our partner vendor`s design center where you can view a wide variety of product styles and finishes. Otherwise, we can bring a catalog of samples that you can choose from. If you’ve already chosen your materials, we are happy to work with those, too. You’ll be provided a detailed project list for specified items.',
                open: false,
                useBulletPoints: false,
              },
              {
                question: 'Fabrication',
                answer: 'After your chosen materials have been delivered to our shop and we have finished product fabrication, we will schedule a time for delivery or installation.',
                open: false,
                useBulletPoints: false,
              },
              {
                question: 'Your Project is Complete!',
                answer: [
                    'Once your project is complete, you’ll join us on a final walk-through and inspection.',
                    'Final payment is not required until after your project is completed according to the proposal and plan (including any adjustments made) and your satisfaction.',
                ],
                open: false,
                useBulletPoints: true,
              },
          ],
        };
      },
      methods: {
        toggle(index) {
          this.process[index].open = !this.process[index].open;
        },
      },
    };
  </script>
    
  <style scoped>
  </style>
    