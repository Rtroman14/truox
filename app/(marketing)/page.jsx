import Image from "next/image";
import { Button } from "@/components/ui/button";
import ContactFormSection from "@/components/ContactFormSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-white space-y-20">
            {/* Hero Section */}
            <section className="relative h-[800px] bg-gray-100">
                <Image
                    src="/images/water-background.jpg"
                    alt="Water Splash"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center px-20 container">
                    <div className="relative w-[400px] h-[400px] mx-auto">
                        <Image
                            src="/images/water-splash.png"
                            alt="Water Splash Effect"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="text-right">
                        <p className="text-2xl uppercase tracking-wider font-light">
                            Oxidation & Supplemental{" "}
                            <span className="bg-[#3474BE] text-white px-2 py-1">Technologies</span>
                        </p>
                        <h1 className="text-5xl font-extrabold mt-2">THE TRUOX® DIFFERENCE</h1>
                    </div>
                </div>
            </section>

            {/* RWI Technology Section */}
            <section className="py-20 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[300px] container">
                    <Image
                        src="/images/water-surface.jpg"
                        alt="Aqua Background"
                        width={500}
                        height={500}
                        className="rounded-xl shadow-lg mx-auto"
                    />
                </div>
                <div>
                    <Image
                        src="/images/rwi-reduction-tech.png"
                        alt="RWI Logo"
                        width={500}
                        height={500}
                        className="mb-6"
                    />
                    <p className="text-gray-600 mb-6">
                        RWI Reduction Technology is a New Generation of Patented Technologies
                        specifically developed to remediate the underlying causes of Recreational
                        Water Illness.
                    </p>
                    <Button variant="default">LEARN MORE</Button>
                </div>
            </section>

            {/* BreatheEZ Section */}
            <section className="bg-[#3474BE] text-white py-20 relative">
                <Image src="/images/light-blue-water.jpg" alt="Water Splash" fill />

                <div className="container mx-auto px-4 text-center relative">
                    <Image
                        src="/images/breathe-ez.png"
                        alt="BreatheEZ Logo"
                        width={500}
                        height={500}
                        className="mx-auto mb-6 relative z-10"
                    />
                    <p className="max-w-2xl mx-auto mb-6 relative z-10">
                        BreatheEZ is the first product release in the RWI Reduction Technology
                        family designed specifically to remediate existing Chlorinated Disinfection
                        Byproducts (e.g. THMs Chloramines) as well as prevent the formation of new
                        ones.
                    </p>
                    <Button
                        variant="outline"
                        className="text-primary border-white hover:bg-white/90 hover:text-primary relative z-10"
                    >
                        READ MORE
                    </Button>
                </div>
            </section>

            {/* OXIDATION WITHOUT IRRITATION® Section */}
            <section className="py-20 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-start text-3xl font-bold mb-4">
                        OXIDATION WITHOUT IRRITATION®
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Truox® was founded in 2003 and specializes in the Research, Development &
                        Commercialization of Advanced Oxidizer Technologies. With over 40 patents
                        including Micro-reactors and In-Situ generated Free Radicals, Truox®
                        products and technologies are used in a wide range of applications and
                        industries. Truox® innovations have led the way in Advanced Oxidation for
                        Recreational Water treatment since 2006.
                    </p>
                    {/* <Button variant="default">LEARN MORE</Button> */}
                </div>
                <div className="relative h-[300px]">
                    <Image
                        src="/images/pool-lanes.jpg"
                        alt="Aqua Background"
                        width={500}
                        height={500}
                        className="rounded-xl shadow-lg mx-auto"
                    />
                </div>
            </section>

            {/* News Section */}
            {/* <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-2xl font-bold mb-12">NEWS & ARTICLES</h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt="Gift Guide"
                                width={600}
                                height={300}
                                className="w-full"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-4">
                                    10 Gifts Ideas for the Indoor Swimmer in Your Life
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    The holidays are almost here and we know it is time to start
                                    shopping! Whether you are doing early holiday shopping or
                                    last-minute shopping...
                                </p>
                                <Button variant="link" className="text-blue-600 p-0">
                                    READ MORE
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Contact Form Section */}
            <section className="bg-[#3474BE] text-white py-20 relative">
                <Image src="/images/pool-blue-overlay.jpg" alt="Water Splash" fill />
                <ContactFormSection />
            </section>
        </main>
    );
}
