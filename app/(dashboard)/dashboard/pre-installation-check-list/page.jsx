import PreInstallationCheckList from "./_components/PreInstallationCheckList";

export const metadata = {
    title: "Truox | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function PreInstallationCheckListPage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <PreInstallationCheckList />
            </div>
        </div>
    );
}
