/* src/components/Companies/Companies.tsx */
import React from 'react';
import unaspLogo from '../../resources/carrossel/Unasp.svg';
import eraLogo from '../../resources/carrossel/ERA.svg';
import pirelliLogo from '../../resources/carrossel/Pirelli.svg';
import desktopLogo from '../../resources/carrossel/Desktop.svg';
import linharesDistribuidoras from '../../resources/carrossel/LinharesDistribuidora.svg';

const logos = [
    { src: unaspLogo, alt: 'Unasp' },
    { src: eraLogo, alt: 'ERA' },
    { src: pirelliLogo, alt: 'Pirelli' },
    { src: desktopLogo, alt: 'Desktop' },
    { src: linharesDistribuidoras, alt: 'LinharesDistribuidora' }
];

const Companies: React.FC = () => (
    <section id="companies" className="py-14">
        <div className="container mx-auto px-4 md:px-8">
            <h3 className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400">
                O sucesso dos engenheiros e designers foi graças à passagem por lugares como
            </h3>

            <div className="relative mt-6 overflow-hidden">
                <div
                    className="flex flex-row animate-marquee gap-8"
                    style={
                        {
                            '--gap': '1rem',
                            '--duration': '40s',
                            width: '200%',
                        } as React.CSSProperties
                    }
                >
                    <div className="flex flex-row gap-8">
                        {logos.map((logo) => (
                            <img
                                key={logo.alt}
                                src={logo.src}
                                alt={logo.alt}
                                className="companies-logo h-10 w-28"
                            />
                        ))}
                    </div>

                    <div className="flex flex-row gap-8">
                        {logos.map((logo) => (
                            <img
                                key={`${logo.alt}-dup`}
                                src={logo.src}
                                alt={logo.alt}
                                className="companies-logo h-10 w-28"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Companies;