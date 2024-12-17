import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactFormSection() {
    return (
        <div className="container mx-auto px-4 max-w-2xl relative">
            <h2 className="text-center text-4xl font-bold mb-12">START BREATHE EZ™ FREE</h2>
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
                    <Checkbox id="terms" className="bg-white" />
                    <label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions
                    </label>
                </div>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    START YOUR FREE TRIAL
                </Button>
            </form>
        </div>
    );
}
