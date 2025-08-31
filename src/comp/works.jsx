import React from "react";

const videos = [
  {
    src: "https://imagekit.io/player/embed/3vpcacvgi/1.mp4?autoplay=true&loop=true&muted=true&controls=true&playsinline=1",
    thumbnail:
      "https://ik.imagekit.io/3vpcacvgi/1.mp4/ik-thumbnail.jpg?updatedAt=1756624952022",
  },
  {
    src: "https://imagekit.io/player/embed/3vpcacvgi/2.mp4?autoplay=true&loop=true&muted=true&controls=true&playsinline=1",
    thumbnail:
      "https://ik.imagekit.io/3vpcacvgi/2.mp4/ik-thumbnail.jpg?updatedAt=1756624952022",
  },
  {
    src: "https://imagekit.io/player/embed/3vpcacvgi/3.mp4?autoplay=true&loop=true&muted=true&controls=true&playsinline=1",
    thumbnail:
      "https://ik.imagekit.io/3vpcacvgi/3.mp4/ik-thumbnail.jpg?updatedAt=1756624952022",
  },
  {
    src: "https://imagekit.io/player/embed/3vpcacvgi/4.mp4?autoplay=true&loop=true&muted=true&controls=true&playsinline=1",
    thumbnail:
      "https://ik.imagekit.io/3vpcacvgi/4.mp4/ik-thumbnail.jpg?updatedAt=1756624952022",
  },
  {
    src: "https://imagekit.io/player/embed/3vpcacvgi/5.mp4?autoplay=true&loop=true&muted=true&controls=true&playsinline=1",
    thumbnail:
      "https://ik.imagekit.io/3vpcacvgi/5.mp4/ik-thumbnail.jpg?updatedAt=1756624952022",
  },
  {
    src: "https://imagekit.io/player/embed/3vpcacvgi/6.mp4?autoplay=true&loop=true&muted=true&controls=true&playsinline=1",
    thumbnail:
      "https://ik.imagekit.io/3vpcacvgi/6.mp4/ik-thumbnail.jpg?updatedAt=1756624952022",
  },
];

export default function Works() {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent mb-12">
          MY WORK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="relative aspect-[9/16] w-[80%] mx-auto group">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-[5%] overflow-hidden"
                src={video.src}
                title="ImageKit video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                playsInline
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
