import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="py-4 mx-auto w-5/6">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
                <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
                    <h1 className=" font-semibold leading-tight text-green-950 dark:text-white text-4xl sm:text-5xl lg:text-6xl">
                        Louez votre propriété en toute confiance <span className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-300 to-orange-800">Shopping@babi</span>
                    </h1>
                    <p className=" flex text-gray-700 dark:text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae soluta ipsa
                        incidunt expedita rem! Suscipit molestiae voluptatem iure, eum alias nobis velit quidem
                        reiciendis saepe nostrum
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
                        <Link href="#" className="px-6 items-center h-12 rounded-3xl bg-orange-600 text-white duration-300 ease-linear flex justify-center w-full sm:w-auto">
                            Inscrivez votre propriété
                        </Link>
                    </div>
                </div>
                <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
                    <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
                        <Image src="/img/receptionniste.jpg" alt="buildind plan image" width={1300} height={1300} className="w-full h-full object-cover z-30" />
                    </div>
                    <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
                        <Image src="/img/avz.jpg" alt="working-on-housing-project" height={1300} width={1300} className="z-10 w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}