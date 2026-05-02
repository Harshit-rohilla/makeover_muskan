"use client";

import CloudImage from "@/components/shared/CloudImage";
import { PortfolioImage } from "@/types";

export const PORTFOLIO_GRID_SPAN_CLASSES: Record<string, string> = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-1 sm:col-span-2 row-span-1",
  tall: "col-span-1 row-span-1 sm:row-span-2",
  large: "col-span-1 sm:col-span-2 row-span-1 sm:row-span-2",
};

interface PortfolioImageCardProps {
  image: PortfolioImage;
  /** When true, shows expand hint and allows opening lightbox via onOpen */
  interactive?: boolean;
  onOpen?: () => void;
  className?: string;
}

export default function PortfolioImageCard({
  image,
  interactive = false,
  onOpen,
  className = "",
}: PortfolioImageCardProps) {
  return (
    <div
      className={`relative h-full min-h-0 rounded-2xl overflow-hidden group ${
        interactive ? "cursor-pointer" : "cursor-default"
      } ${className}`}
      onClick={interactive ? onOpen : undefined}
      onKeyDown={
        interactive && onOpen
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen();
              }
            }
          : undefined
      }
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
    >
      <CloudImage
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-white text-sm font-medium tracking-wide uppercase">
          {image.category.replace("-", " ")}
        </p>
        <p className="text-white/70 text-xs mt-1">{image.alt}</p>
      </div>

      {interactive && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
