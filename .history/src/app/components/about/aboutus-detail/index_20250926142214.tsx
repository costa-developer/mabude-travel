const AboutusDetail = () => {
  return (
    <section className="py-10 md:py-20 xl:py-40 bg-white dark:bg-secondary">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Heading */}
          <div className="max-w-xl w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
              About Our Tours in Zimbabwe & India
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-8">
            <p className="text-gray-700 dark:text-white text-base md:text-lg leading-relaxed">
              We create unforgettable journeys through Zimbabwe's breathtaking landscapes and India's rich cultural heritage. From Victoria Falls to Jaipur’s palaces, each tour is designed to inspire and delight.
            </p>
            <p className="text-gray-700 dark:text-white text-base md:text-lg leading-relaxed">
              Travel with local guides, discover hidden gems, and immerse yourself in authentic experiences. Adventure, culture, and memories await at every destination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusDetail;
