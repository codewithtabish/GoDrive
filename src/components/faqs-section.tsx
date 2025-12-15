"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { Search, SearchSlash, Car, Key } from "lucide-react";
import React from "react";

export function FaqsSection() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "getting-started", label: "Getting Started" },
    { id: "rides", label: "Rides" },
    { id: "rentals", label: "Car Rentals" },
    { id: "billing", label: "Billing" },
    { id: "support", label: "Support" },
  ];

  const filtered = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl md:border-x">
      <div className="px-4 py-16 lg:px-6">
        <h1 className="mb-4 font-semibold text-3xl md:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Find answers to common questions about EuroDrive. Can't find what you're
          looking for? Our support team is here to help.
        </p>

        <InputGroup className="max-w-sm">
          <InputGroupInput
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs..."
            value={searchTerm}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="absolute inset-x-0 h-px bg-border" />

      <div className="flex flex-wrap gap-1 border-b px-4 md:gap-3">
        {categories.map((cat) => (
          <button
            className="flex flex-col"
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            type="button"
          >
            <span
              className={cn(
                "p-1 text-muted-foreground text-sm hover:text-primary md:p-2 md:text-base",
                activeCategory === cat.id && "text-primary"
              )}
            >
              {cat.label}
            </span>
            {activeCategory === cat.id && (
              <span className="h-0.5 w-full rounded-full bg-primary" />
            )}
          </button>
        ))}
      </div>

      <Accordion
        className="space-y-2 px-4 py-12 lg:px-6"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        {filtered.map((faq) => (
          <AccordionItem
            className="rounded-md border bg-card/20 shadow outline-none last:border-b has-focus-visible:border-ring data-[state=open]:bg-card"
            key={faq.id}
            value={faq.id.toString()}
          >
            <AccordionTrigger className="px-4 hover:no-underline focus-visible:ring-0">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-2 pb-4 text-muted-foreground">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {filtered.length === 0 && (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Search />
            </EmptyMedia>
            <EmptyTitle>No FAQs found matching your search.</EmptyTitle>
          </EmptyHeader>
          <EmptyContent>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              <SearchSlash />
              Clear search
            </Button>
          </EmptyContent>
        </Empty>
      )}

      <div className="flex items-center px-4 py-6 lg:px-6">
        <p className="text-muted-foreground">
          Can't find what you're looking for?{" "}
          <a className="text-primary hover:underline" href="#contact">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}

const faqs = [
  {
    id: 1,
    category: "getting-started",
    title: "How do I book my first ride?",
    content:
      "Open the EuroDrive app, choose your pickup and drop-off location, select your ride type, and confirm your booking. You'll receive a driver instantly.",
  },
  {
    id: 2,
    category: "rides",
    title: "Can I schedule a ride in advance?",
    content:
      "Yes, EuroDrive allows you to schedule rides up to 7 days in advance. Simply select 'Schedule Ride' and choose the date and time.",
  },
  {
    id: 3,
    category: "rentals",
    title: "How do I rent a car?",
    content:
      "Browse our fleet in the app, select your car, rental duration, and complete payment. You'll receive pickup instructions immediately.",
  },
  {
    id: 4,
    category: "billing",
    title: "What payment methods are accepted?",
    content:
      "We accept all major credit/debit cards, digital wallets, and in-app payments. Corporate invoicing is available for businesses.",
  },
  {
    id: 5,
    category: "support",
    title: "How do I contact customer support?",
    content:
      "Reach us via the in-app chat, email support@eurodrive.com, or call our 24/7 helpline. We're always ready to assist you.",
  },
  {
    id: 6,
    category: "rides",
    title: "Can I share my ride with others?",
    content:
      "Yes, you can opt for ride-sharing when booking your ride, and split the fare with other passengers.",
  },
  {
    id: 7,
    category: "rentals",
    title: "Are rental cars insured?",
    content:
      "All EuroDrive rental cars are fully insured. Insurance details are available in the app before confirming your rental.",
  },
];
