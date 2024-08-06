"use client";
import useSWR from "swr";

import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";

export function TestimonialsInfiniteScroll() {

  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR("https://avis.sofiane-rahmani.com/api/testimonials", fetcher);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error state
  }

  if (!data || data.length === 0) {
    return <div>No testimonials found.</div>; // Handle case when data is empty or undefined
  }

  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-md antialiased ">
      <InfiniteMovingCards items={data} direction="right" speed="slow" className='' />
    </div>
  );
}


