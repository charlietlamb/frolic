export default function HeroContent() {
  return (
    <div className="relative h-full flex flex-grow flex-col justify-center items-center overflow-hidden rounded-base">
      <img
        className="h-screen w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1627483298606-cf54c61779a9"
      />
      <div className="absolute inset-0 z-10 flex flex-col font-futura items-center justify-center text-white big-size">
        This is a tagline.
      </div>
    </div>
  );
}
