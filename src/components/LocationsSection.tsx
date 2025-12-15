import { MapPin } from 'lucide-react';

const column1 = ['Hyderabad', 'Kolkata', 'Vijayawada', 'Ahmedabad'];
const column2 = ['Bengaluru', 'Pune', 'Ludhiana'];
const column3 = ['Chennai', 'Vizag', 'Kochi'];

const LocationItem = ({ city, showBorder = false }: { city: string; showBorder?: boolean }) => (
    <li className={`mb-6 last:mb-0 flex justify-center lg:justify-start relative`}>
        <div
            className={`
        flex items-center text-gray-900
        w-full
        ${showBorder ? 'border-r border-[#2C847F]' : ''}
      `}
        >
            <div className="mr-2 lg:mr-3 text-[#2C847F] shrink-0">
                <MapPin className="w-5 h-5 lg:w-6 lg:h-6 stroke-[1.5]" />
            </div>
            <span
                className="text-xs sm:text-sm lg:text-[15px] font-normal tracking-wide text-gray-800"
                style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
            >
                {city}
            </span>
        </div>
    </li>
);

export default function LocationsSection() {
    return (
        <section className="w-full py-16 lg:py-24 relative z-10" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Left Column: Heading */}
                    <div className="w-full lg:w-[32%] mb-8 lg:mb-0 text-center lg:text-left z-20">
                        <h2
                            className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#2B3445] leading-[1.2] mb-2"
                            style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
                        >
                            Find the Best <br className="hidden lg:block" />
                            <span className="lg:hidden"> </span>
                            Vein Specialist Near You
                        </h2>
                        <p
                            className="text-gray-600 text-sm sm:text-lg font-light tracking-wide"
                            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
                        >
                            34 State-of-the-art-clinics
                        </p>
                    </div>

                    {/* Right Column: Cities List */}
                    <div className="w-full lg:w-[68%] relative pl-0 lg:pl-10">

                        {/* Background Map - Watermark */}
                        <div
                            className="absolute inset-0 z-0 pointer-events-none"
                            style={{
                                backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                opacity: 0.25,
                                filter: 'invert(55%) sepia(66%) saturate(492%) hue-rotate(134deg) brightness(90%) contrast(92%)'
                            }}
                        ></div>

                        {/* Grid Container */}
                        <div className="relative z-10 grid grid-cols-3">

                            {/* Column 1 */}
                            <ul className="list-none p-0 m-0 pr-1 sm:pr-2 lg:pr-10">
                                {column1.map((city, index) => (
                                    <LocationItem key={index} city={city} showBorder={index < 3} />
                                ))}
                            </ul>

                            {/* Column 2 */}
                            <ul className="list-none p-0 m-0 px-1 sm:px-2 lg:pl-10 lg:pr-10">
                                {column2.map((city, index) => (
                                    <LocationItem key={index} city={city} showBorder={true} />
                                ))}
                            </ul>

                            {/* Column 3 */}
                            <ul className="list-none p-0 m-0 pl-1 sm:pl-2 lg:pl-10">
                                {column3.map((city, index) => (
                                    <LocationItem key={index} city={city} showBorder={false} />
                                ))}
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
