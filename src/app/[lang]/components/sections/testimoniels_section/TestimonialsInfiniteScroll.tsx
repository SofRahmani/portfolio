"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { LoaderCircle } from "lucide-react";
import useSWR from "swr";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";

interface TestimonialsInfiniteScrollProps {
  noTestimonials: string;
}

export function TestimonialsInfiniteScroll({ noTestimonials }: TestimonialsInfiniteScrollProps) {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR(
    "https://avis.sofiane-rahmani.com/api/testimonials",
    fetcher
  );
  console.log(data);

  if (isLoading) {
    return (
      <div className="flex size-full items-center justify-center">
        <LoaderCircle className="size-10 animate-spin" />
      </div>
    ); 
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error state
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex size-full items-center justify-center italic">
        {noTestimonials}
      </div>
    ); // Handle case when data is empty or undefined
  }

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-md antialiased">
      <Carousel
        orientation="horizontal"
        opts={{
          align: "start",
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 7000
          })
        ]}
        className="w-full lg:w-3/4"
      >
        <CarouselContent>
          {data.map((item: any, index: number) => (
            <CarouselItem key={index} className="lg:basis-1/2">
              <Card className=" size-full select-none">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-b from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    {item.name}
                  </CardTitle>
                  <CardDescription>{item.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className=" mt-2 leading-relaxed ">{item.message}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
