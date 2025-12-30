import React from 'react';

interface ImageHeadingProps {
  imageUrl: string;
  headingText: string;
}

export default function ImageHeading({ imageUrl, headingText }: ImageHeadingProps) {
  return (
    <div className="relative w-full py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8">
            {headingText}
          </h2>
          <img
            src={imageUrl}
            alt={headingText}
            className="w-full max-w-4xl mx-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}
