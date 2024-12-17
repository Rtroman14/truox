import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ContactFormSection from "@/components/ContactFormSection";

export default function Technology() {
    return (
        <main className="min-h-screen bg-white space-y-20">
            {/* Hero Section */}
            <section className="relative h-[400px] bg-gray-100">
                <Image
                    src="/images/water-background.jpg"
                    alt="Technology Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-extrabold">TECHNOLOGY</h1>
                </div>
            </section>

            {/* Superior Indoor Water & Air Quality Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <Image
                        src="/images/rwi-reduction-tech.png"
                        alt="RWI Logo"
                        width={300}
                        height={100}
                        className="mb-6"
                    />
                    <h2 className="text-2xl font-bold mb-4">SUPERIOR INDOOR WATER & AIR QUALITY</h2>
                    <p className="text-gray-600 mb-6">
                        RWI Reduction Technology® is the newest Generation of patented Technologies
                        developed specifically for mitigating the underlying causes of Recreational
                        Water Illness.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Researchers from a top university recently conducted a study at an INDOOR
                        Aquatic Facility using BreatheEZ® on both the air and water. The study
                        included monitoring the before and after effects of a new generation of pool
                        water treatment called BreatheEZ™ and the results were remarkable.
                    </p>
                    <Button variant="default">LEARN MORE</Button>
                </div>
            </section>

            {/* BreatheEZ Section */}
            <section className="bg-[#3474BE] text-white py-20 relative">
                <div className="container mx-auto px-4 text-center">
                    <Image
                        src="/images/breathe-ez.png"
                        alt="BreatheEZ Logo"
                        width={300}
                        height={100}
                        className="mx-auto mb-6"
                    />
                    <p className="max-w-2xl mx-auto mb-6">
                        BreatheEZ™ is a patented technology designed specifically to address
                        Recreational Water Illness (RWI) by mitigating and preventing the formation
                        of Chlorinated Disinfection Byproducts in INDOOR Aquatic Facilities.
                        BreatheEZ™ utilizes Advanced Oxidation Technology to produce the same Free
                        Radicals to remediate existing DBPs while preventing new ones.
                    </p>
                </div>
            </section>

            {/* Accordion Section */}
            <section className="container mx-auto px-4 py-20">
                <Image
                    src="/images/breathe-ez.png"
                    alt="BreatheEZ Logo"
                    width={200}
                    height={80}
                    className="mx-auto mb-12"
                />
                <div className="max-w-2xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="overview">
                            <AccordionTrigger>OVERVIEW</AccordionTrigger>
                            <AccordionContent>[Overview content goes here]</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="benefits">
                            <AccordionTrigger>BENEFITS</AccordionTrigger>
                            <AccordionContent>[Benefits content goes here]</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="performance">
                            <AccordionTrigger>PERFORMANCE</AccordionTrigger>
                            <AccordionContent>[Performance content goes here]</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="implementation">
                            <AccordionTrigger>IMPLEMENTATION</AccordionTrigger>
                            <AccordionContent>[Implementation content goes here]</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="bg-[#3474BE] text-white py-20 relative">
                <Image src="/images/pool-blue-overlay.jpg" alt="Water Splash" fill />
                <ContactFormSection />
            </section>
        </main>
    );
}
