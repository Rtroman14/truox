import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[800px] bg-gray-100">
                <Image
                    src="/images/water-background.jpg"
                    alt="Water Splash"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center px-20">
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
                <div className="relative h-[300px]">
                    <Image
                        src="/images/water-surface.jpg"
                        alt="Aqua Background"
                        width={500}
                        height={500}
                        className="rounded-xl shadow"
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

            {/* News Section */}
            <section className="py-20 bg-gray-50">
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
            </section>

            {/* Contact Form Section */}
            <section className="bg-[#3474BE] text-white py-20">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-center text-3xl font-bold mb-12">START BREATHE EZ™ FREE</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="Name" className="bg-white" />
                            <Input placeholder="Organization Name" className="bg-white" />
                            <Input placeholder="Job Title" className="bg-white" />
                            <Input placeholder="Phone Number" className="bg-white" />
                            <Input placeholder="Email Address" className="bg-white" />
                            <Input placeholder="Shipping Address" className="bg-white" />
                        </div>
                        <Input placeholder="Volume of Pool Water" className="bg-white" />
                        <Textarea placeholder="Additional Information" className="bg-white h-32" />
                        <div className="flex items-center gap-2">
                            <Checkbox id="terms" />
                            <label htmlFor="terms" className="text-sm">
                                I agree to the terms and conditions
                            </label>
                        </div>
                        <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                            START YOUR FREE TRIAL
                        </Button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-12">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">ABOUT TRUOX</h3>
                        <p className="text-gray-600">
                            Truox® was founded in 2003 and specializes in the Research, Development
                            & Commercialization of Advanced Oxidizer Technologies. With over 40
                            patents including Micro-reactors and In-Line Generators, Truox® Advanced
                            Oxidation Technologies are used in a wide range of applications and
                            industries.
                        </p>
                    </div>
                    <div className="md:pl-12">
                        <h3 className="font-bold text-lg mb-4">SUBSCRIBE</h3>
                        <div className="flex gap-2">
                            <Input placeholder="Email" className="max-w-xs" />
                            <Button>SUBSCRIBE</Button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
