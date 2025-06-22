"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Feature {
  name: string
  description: string
  included: boolean
}

interface PricingTier {
  name: string
  price: {
    monthly: number
    yearly: number
  }
  description: string
  features: Feature[]
  highlight?: boolean
  badge?: string
  icon?: React.ReactNode // icon is optional now
  bottomText?: string
}

interface PricingSectionProps {
  tiers: PricingTier[]
  className?: string
}

function PricingSection({ tiers, className }: PricingSectionProps) {
  const buttonStyles = {
    default: cn(
      "h-12 bg-green-500",
      "hover:bg-green-600",
      "text-black",
      "text-base font-semibold",
    ),
    highlight: cn(
      "h-12 bg-green-500",
      "hover:bg-green-600",
      "text-black",
      "text-base font-semibold",
    ),
  }

  return (
    <section
      className={cn(
        "relative bg-black text-white",
        "py-1 px-4 md:py-1 lg:py-1",
        "overflow-hidden",
        className,
      )}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group backdrop-blur-sm",
                "rounded-3xl transition-all duration-300",
                "flex flex-col",
                "bg-black",
                "border border-green-500/30 shadow-md",
                "p-8",
              )}
            >
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {tier.name}
                </h3>

                <p className="mb-8 text-lg text-gray-400">
                  {tier.description}
                </p>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex gap-4 items-center">
                      <div className="text-green-500">
                        <CheckIcon className="w-5 h-5" />
                      </div>
                      <div className="text-base font-medium text-white">
                        {feature.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                {tier.bottomText && (
                  <p className="mb-6 text-base text-gray-400">
                    {tier.bottomText}
                  </p>
                )}
                <Link
                  href="https://cal.com/saurabh-singh-cg9fek/testing"
                  passHref
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <Button
                      className={cn(
                        "w-full relative transition-all duration-300 rounded-lg",
                        tier.highlight
                          ? buttonStyles.highlight
                          : buttonStyles.default,
                      )}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Secure Your Spot
                      </span>
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { PricingSection }