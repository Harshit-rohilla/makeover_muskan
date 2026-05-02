"use client";

import Image from "next/image";

interface CloudImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  onLoad?: () => void;
}

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjRDMkMyIi8+PC9zdmc+";

export default function CloudImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  className = "",
  fill = false,
  objectFit = "cover",
  onLoad,
}: CloudImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={className}
      fill={fill}
      placeholder="blur"
      blurDataURL={BLUR_PLACEHOLDER}
      onLoad={onLoad}
      style={{ objectFit }}
    />
  );
}
