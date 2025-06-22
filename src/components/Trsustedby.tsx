import { Logos3 } from "@/components/blocks/logos3"

const demoData = {
  heading: "Trusted by 30+ agencies, startups, and consultants worldwide",
  logos: [
    {
      id: "logo-1",
      description: "VeeZee",
      image: "/logoss/veezee.webp",
      className: "h-8 w-auto",
    },
    {
      id: "logo-2",
      description: "Ninja",
      image: "/logoss/ninja.webp",
      className: "h-8 w-auto",
    },
    {
      id: "logo-3",
      description: "Wassup Media",
      image: "/logoss/wassupmedia.webp",
      className: "h-8 w-auto",
    },
    {
      id: "logo-4",
      description: "Prestige",
      image: "/logoss/prestige.webp",
      className: "h-8 w-auto",
    },
    {
      id: "logo-5",
      description: "Spain Academy",
      image: "/logoss/spainacademy.webp",
      className: "h-8 w-auto",
    },
    {
      id: "logo-6",
      description: "Khushiva",
      image: "/logoss/khushiva.webp",
      className: "h-8 w-auto",
    },
  ],
};

function Trsustedby() {
  return <Logos3 {...demoData} />;
}

export  default Trsustedby;
