import PageHero from "@/components/PageHero";

export const metadata = {
    title: "Truox | Food Safety",
    description: "Food safety solutions with CryptoLyte",
};

export default function FoodPage() {
    return (
        <div className="mt-[70px] relative">
            <PageHero title="Food Safety" subheading="Protecting Food Processing Operations" />

            <section className="py-20 sm:py-28 flex flex-col items-center justify-center container">
                <div className="max-w-screen-md text-center">
                    <h2 className="font-bold text-4xl mb-6">Coming Soon</h2>
                    <p className="text-slate-700">
                        We're currently developing our food safety solutions page. Check back soon
                        for detailed information about how our products can enhance food processing
                        safety.
                    </p>
                </div>
            </section>
        </div>
    );
}
