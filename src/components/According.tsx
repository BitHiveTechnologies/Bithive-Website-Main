"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function SingleAccordionDemo() {
  const accordions = [
    {
      title: "What services do you offer?",
      text: "We specialize in web development, UI/UX design, and digital solutions. Our services include custom website development, responsive design, e-commerce solutions, and ongoing maintenance and support.",
    },
    {
      title: "How long does the website design process take?",
      text: "The timeline varies depending on project complexity. Typically, a standard website takes 4-8 weeks from concept to launch. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      title: "Will I be involved in the design process?",
      text: "Absolutely! We believe in collaborative design. You'll be involved at every key stage, from initial concepts to final implementation, ensuring the end result matches your vision perfectly.",
    },
    {
      title: "Do you provide ongoing support after launch?",
      text: "Yes, we offer comprehensive post-launch support packages. This includes regular maintenance, updates, security monitoring, and technical support to keep your website running smoothly.",
    },
    {
      title: "Can you help with SEO?",
      text: "Yes, we integrate SEO best practices during development and can provide additional SEO services to improve your website's visibility. We also offer ongoing SEO optimization packages.",
    },
    {
      title: "Do you offer refunds?",
      text: "We have a satisfaction guarantee policy. While we don't offer direct refunds, we're committed to working with you until you're completely satisfied with the delivered product.",
    }
  ]

  return (
    <div className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <p className="mt-4 text-xl sm:text-2xl text-white"> Questions?</p>
      <h2 className="scroll-m-20 text-3xl sm:text-4xl font-semibold tracking-tighter lg:text-6xl text-green-accent mb-6 sm:mb-8 text-green-accent">We got answers!</h2>
      </div>
    
      <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
        {accordions.map(({ title, text }) => (
          <AccordionItem 
            key={title} 
            value={title} 
            className="border border-[#333] rounded-lg overflow-hidden bg-[#111] data-[state=open]:border-green-accent"
          >
            <AccordionTrigger className="px-4 sm:px-5 py-3 text-sm sm:text-base font-normal hover:no-underline hover:text-green-accent">
              {title}
            </AccordionTrigger>
            <AccordionContent className="px-4 sm:px-5 pb-3 text-xs sm:text-sm text-neutral-400">
              {text}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export { SingleAccordionDemo }