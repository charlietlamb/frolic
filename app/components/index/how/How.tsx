import HowText from './HowText';
import HowVideo from './HowVideo';

export default function How() {
  return (
    <div className="padding-main bg-light md:pb-32 md:pt-16 relative">
      <div className="relative flex flex-col gap-8">
        <h2 className="font-futura h1-size font-bold">How it works</h2>
        <HowVideo />
        <HowText />
      </div>
    </div>
  );
}
