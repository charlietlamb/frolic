export default function HowText() {
  const h4ClassName = 'font-futura font-bold text-dark h3-size uppercase';
  const pClassName = 'font-anti text-dark p-size';
  return (
    <div className="bg-green rounded-base md:absolute md:z-10 md:p-4 md:w-[50%] md:-bottom-24 md:right-0 p-4 w-full">
      <h4 className={h4ClassName}>1. Choose your mat 🧘‍♀️ </h4>
      <p className={pClassName}>
        Our eco-friendly yoga mat is stylish and durable - all you have to do is
        pick your color.
      </p>
      <h4 className={h4ClassName}>2. Select your accessories 🧺</h4>
      <p className={pClassName}>
        Choose your favorite yoga props (blocks, straps, bolsters) and we'll
        include them with your mat.
      </p>
      <h4 className={h4ClassName}>3. Subscribe & save or buy once 📦</h4>
      <p className={pClassName}>
        We'll ship your mat and accessories to you exactly when you need them,
        whether you prefer a one-time purchase or regular replacements.
      </p>
    </div>
  );
}
