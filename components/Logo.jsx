import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src="/images/truox-logo.png"
                alt="Picture of the logo"
                width={100}
                height={100}
            />
        </Link>
    );
}
