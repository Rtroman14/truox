import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <footer className="pt-20 pb-10 container">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 w-full">
                <div>
                    <h3 className="font-bold text-lg mb-4">ABOUT TRUOX</h3>
                    <p className="text-gray-600">
                        Truox® was founded in 2003 and specializes in the Research, Development &
                        Commercialization of Advanced Oxidizer Technologies. With over 40 patents
                        including Micro-reactors and In-Situ generated Free Radicals, Truox®
                        products and technologies are used in a wide range of applications and
                        industries. Truox® innovations have led the way in Advanced Oxidation for
                        Recreational Water treatment since 2006.
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

            <p className="text-center text-sm text-slate-600 [text-wrap:balance] pt-12">
                Copyright © 2024 Cryptolyte®.com. All rights reserved.
            </p>
        </footer>

        // <footer className="bg-background py-16">
        //     <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-6 px-5">
        //         <div>
        //             <div className="flex justify-center">
        //                 <Logo />
        //             </div>

        //             <p className="text-center text-sm text-slate-600 [text-wrap:balance]">
        //                 Copyright © 2024 Cryptolyte®.com. All rights reserved.
        //             </p>
        //         </div>
        //     </div>
        // </footer>
    );
}
