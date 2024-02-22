<template>
  <div class="p-6">
    <h2 class="text-4xl text-center font-bold mt-6 mb-12">Frequently Asked Questions</h2>
    <div class="space-y-3">
      <div v-for="(faq, index) in faqs" :key="index" class="border rounded-lg bg-white">
        <button
          @click="toggle(index)"
          class="w-full text-left px-4 py-2 rounded-lg flex justify-between items-center"
        >
          <span class="font-bold">{{ faq.question }}</span>
          <span>{{ faq.open ? '-' : '+' }}</span>
        </button>
        <div v-if="faq.open" class="px-4 py-2 border-t-0">
          <div v-if="faq.useBulletPoints">
            <ul class="list-disc pl-5">
              <li v-for="(item, idx) in faq.answer" :key="`item-${idx}`">{{ item }}</li>
            </ul>
          </div>
          <div v-else>
            {{ faq.answer }}
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
        faqs: [
            {
              question: 'Why choose Cabinets & Closets?',
              answer: [
                'We truly care about our customers and give personal attention to each one of them.',
                'Affordable and fair prices.',
                'Integrity and honesty from top to bottom.',
                'Not compromising on less than the best quality vendors, materials and labor in every project.',
                'Our professional and creative architectural and design team.',
                'Dedicated crews and field supervisors.',
                'A clean working environment and a timely schedule results in efficient and smooth projects.',
              ],
              open: false,
              useBulletPoints: true,
            },
            {
              question: 'How long does it take to complete a project?',
              answer: 'Many reasons can impact project time-lines: product availability, amenity selections, and custom design elements. Cabinets and Closets will always meets construction deadlines, but will never sacrifice quality to do so!',
              open: false,
              useBulletPoints: false,
            },
            {
              question: 'What is the cost of a project?',
              answer: 'Construction costs vary depending on size, design, and services selected. During your initial sales consultation we will present you with good, better, best packaging to help narrow your material selections and work toward a more ultimate price for your project. We will provide a fair and competitive price, and we can accommodate any budget.',
              open: false,
              useBulletPoints: false,
            },
            {
              question: 'Does Cabinets & Closets offer a warranty?',
              answer: 'Yes. We offer a one year, limited warranty on our materials and labor.',
              open: false,
              useBulletPoints: false,
            },
            {
              question: 'Does Cabinets & Closets have design services available?',
              answer: 'Yes. We offer custom, one-of-a-kind designs to fit your lifestyle, and aesthetic needs. Our team of certified designers will work diligently with you to create the perfect design.',
              open: false,
              useBulletPoints: false,
            },
            {
              question: 'Can I make a change after I sign the contract?',
              answer: 'Yes, it’s very ordinary for customers to want to tweak items as the process evolves. We will document each change and give you an upfront and fair price to review. However, cost of previously purchased material cannot be replaced.',
              open: false,
              useBulletPoints: false,
            },
        ],
      };
    },
    methods: {
      toggle(index) {
        this.faqs[index].open = !this.faqs[index].open;
      },
    },
  };
</script>
  
<style scoped>
</style>
  