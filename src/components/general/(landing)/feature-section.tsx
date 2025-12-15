"use client";

import {
  Car,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
  Phone,
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

export default function FeatureSection() {
  return (
    <section className="min-h-screen mt-12 place-content-center bg-gray-50 dark:bg-secondary/5">
      <div className="mx-auto w-full max-w-5xl space-y-8 p-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl">
            Ride with Ease. Rent with Confidence.
          </h2>
          <p className="mt-4 text-balance text-muted-foreground text-sm md:text-base">
            EuroDrive makes getting around and renting a car simple, fast, and safe.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-x divide-y border-t border-l sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              className="last:border-r last:border-b"
              feature={feature}
              key={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Wide Fleet",
    icon: Car,
    description: "Choose from a variety of cars for every occasion, from compact to luxury.",
  },
  {
    title: "Fast Booking",
    icon: Clock,
    description: "Reserve your ride or rental in seconds using our intuitive app.",
  },
  {
    title: "Easy Pickup & Drop",
    icon: MapPin,
    description: "Flexible locations for pickup and drop-off, wherever you are.",
  },
  {
    title: "Safety First",
    icon: ShieldCheck,
    description: "All vehicles are sanitized and maintained for your peace of mind.",
  },
  {
    title: "Trusted Service",
    icon: Star,
    description: "Thousands of happy customers rely on EuroDrive daily.",
  },
  {
    title: "24/7 Support",
    icon: Phone,
    description: "Our support team is ready anytime to help with rides or rentals.",
  },
];
