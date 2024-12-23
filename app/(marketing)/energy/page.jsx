import PageHero from "@/components/PageHero";

export const metadata = {
    title: "Truox | Energy Solutions",
    description: "Energy industry solutions with CryptoLyte",
};

export default function EnergyPage() {
    return (
        <div className="mt-[70px] relative">
            <PageHero
                title="Energy Solutions"
                subheading="Innovative Solutions for the Energy Sector"
            />

            <section className="py-20 sm:py-28 flex flex-col items-center justify-center container">
                <div className="max-w-screen-md text-center">
                    <h2 className="font-bold text-4xl mb-6">Under Construction</h2>
                    <p className="text-slate-700">
                        Our energy solutions page is currently under development. Soon, you'll find
                        comprehensive information about our offerings for the energy sector here.
                    </p>
                </div>
            </section>
        </div>
    );
}
