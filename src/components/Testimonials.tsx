"use client";

import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Bithive completely transformed our online presence. Their team delivered a high-converting website that not only looks stunning but also drives significant traffic and leads. Our sales have increased by 40% since launch!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Johnson",
    role: "Marketing Director, Prestige",
  },
  {
    text: "The custom automation solution Bithive developed for us has been a game-changer. It streamlined our workflow, saving us over 20 hours a week and reducing manual errors. Their expertise is unmatched.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Chen",
    role: "CEO, Ninja",
  },
  {
    text: "Working with Bithive was a breeze. They understood our vision perfectly and built a website that exceeded our expectations. The user experience is seamless, and we've received nothing but positive feedback from our customers.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Jessica Martinez",
    role: "Founder, VeeZee",
  },
  {
    text: "Bithive's web development and automation services have been instrumental in our growth. They created a robust e-commerce platform that handles high traffic with ease and automated our inventory management, saving us time and money.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Lee",
    role: "COO, Wassup Media",
  },
  {
    text: "The team at Bithive is incredibly talented and professional. They delivered a beautiful, fast, and responsive website that has significantly improved our brand image. I highly recommend their services to anyone looking for top-notch web development.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Emily Rodriguez",
    role: "Owner, Spain Academy",
  },
  {
    text: "We were struggling with manual, repetitive tasks until Bithive stepped in. Their automation solution has freed up our team to focus on strategic initiatives, boosting productivity and morale. It's one of the best investments we've made.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Chris Thompson",
    role: "Operations Manager, Khushiva",
  },
  {
    text: "From start to finish, the process of building our new website with Bithive was seamless. They were communicative, attentive to detail, and delivered a final product that has driven a 25% increase in conversions. We couldn't be happier.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Laura Davis",
    role: "Marketing Manager, Prestige",
  },
  {
    text: "Bithive's automation expertise has had a huge impact on our business. They helped us automate our lead nurturing process, resulting in a 50% increase in qualified leads and a shorter sales cycle. Their team is simply brilliant.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "James Wilson",
    role: "Sales Director, Ninja",
  },
  {
    text: "The website Bithive created for us is not only visually stunning but also incredibly functional. It has elevated our brand and provided a much-improved experience for our users. Their team is a pleasure to work with.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Olivia Garcia",
    role: "Founder, VeeZee",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background my-12 sm:my-16 lg:my-20 relative px-4 sm:px-6 lg:px-8">
      <div className="w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="w-full py-8 sm:py-12 flex flex-col items-center lg:items-center text-center lg:text-center text-white" >
            <div className="mt-4 text-xl sm:text-2xl text-white">Testimonials</div>
            <h3 className="scroll-m-20 text-3xl sm:text-4xl font-semibold tracking-tighter lg:text-6xl text-green-accent mb-6 sm:mb-8">
            Hear from our clients          </h3>
          </div>

        
          <p className="text-center mt-3 sm:mt-5 opacity-75 px-4 sm:px-8 mb-6 sm:mb-8 text-sm sm:text-base">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 mx-auto max-w-7xl [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] sm:max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden sm:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
