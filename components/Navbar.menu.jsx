"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Logo from "./Logo";

const links = [
    {
        title: "Recreational Water Illness (RWI)",
        href: "/recreational-water-illness",
    },
    {
        title: "Risk Mitigation",
        href: "/risk-mitigation",
    },
    {
        title: "Remediating RWI",
        href: "/remediating-rwi",
    },
    {
        title: "Indoor Air & Water Quality",
        href: "/indoor-water-and-air-quality",
    },
    {
        title: "Videos",
        href: "/videos",
    },
    {
        title: "Blog",
        href: "/blog",
    },
    {
        title: "FAQs",
        href: "/faqs",
    },
    {
        title: "Downloads",
        href: "/downloads",
    },

    {
        title: "Distributor Portal",
        href: "/dashboard",
    },
];

const menuItems = [
    {
        name: "Home",
        href: "/",
        children: [],
    },
    {
        name: "Pages",
        href: "#",
        children: [
            {
                title: "Aquatics",
                href: "https://truoxaquatics.com",
                description: "",
            },
            {
                title: "Food",
                href: "#",
                description: "",
            },
            {
                title: "Energy",
                href: "#",
                description: "",
            },
        ],
    },
];

export default function Navbar({ customer }) {
    const pathname = usePathname();

    const [isScrolledTop, setIsScrolledTop] = useState(true);

    const handleScroll = () => {
        const isTop = window.scrollY < 10; // Adjust the scroll threshold as needed
        setIsScrolledTop(isTop);
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up and remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let isTopHome = false;

    let headerStyles = "fixed top-0 z-50 w-full border-b border-transparent transition-all";

    if (isScrolledTop && ["/"].includes(pathname)) {
        isTopHome = true;
    } else {
        isTopHome = false;
    }

    return (
        <header
            className={cn(
                headerStyles,
                isTopHome ? "bg-primary py-4" : "bg-primary/90 py-2 backdrop-blur-sm shadow"
            )}
        >
            <div className="container mx-auto">
                <div className="relative flex flex-col items-center justify-between lg:flex-row">
                    <div className="flex w-full items-center justify-between lg:w-auto">
                        <Logo />
                        <div className="block text-white lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Bars3Icon className="h-7 w-7 cursor-pointer text-primary duration-200 hover:scale-110" />
                                </SheetTrigger>
                                <SheetContent side="right" className="min-w-[230px] px-3">
                                    <SheetHeader className="mb-4">
                                        <SheetTitle className="flex justify-center">
                                            <Logo />
                                        </SheetTitle>
                                    </SheetHeader>
                                    {links.map((link) => (
                                        <SheetClose asChild key={link.title}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center p-1"
                                            >
                                                <span>{link.title}</span>
                                            </Link>
                                        </SheetClose>
                                    ))}
                                    <Separator />

                                    <div className="my-3 flex justify-between">
                                        <SheetClose asChild>
                                            <Button asChild size="sm" className="rounded px-4">
                                                <Link href="/contact">Contact</Link>
                                            </Button>
                                        </SheetClose>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                    <nav className="astronav-items astronav-toggle mt-2 hidden w-full lg:mt-0 lg:flex lg:w-auto">
                        <NavigationMenu delayDuration={100}>
                            <NavigationMenuList>
                                {menuItems.map((item, index) =>
                                    item.children.length ? (
                                        <NavigationMenuItem key={item.name}>
                                            <NavigationMenuTrigger
                                                className={cn(
                                                    "data-[active]:!bg-transparent data-[state=open]:!bg-transparent bg-transparent text-white hover:text-white hover:bg-transparent"
                                                )}
                                            >
                                                {item.name}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                    {item.children.map((child) => (
                                                        <ListItem
                                                            key={child.href}
                                                            href={child.href}
                                                            title={child.title}
                                                        >
                                                            {child.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={item.name}>
                                            <Link href={item.href} legacyBehavior passHref>
                                                <NavigationMenuLink
                                                    className={cn(
                                                        `${navigationMenuTriggerStyle()} data-[active]:!bg-transparent data-[state=open]:!bg-transparent bg-transparent hover:bg-transparent text-white hover:text-white`
                                                    )}
                                                >
                                                    {item.name}
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    )
                                )}

                                <NavigationMenuItem>
                                    <Button
                                        asChild
                                        size="sm"
                                        className="rounded-md px-4 bg-white hover:bg-white/90 text-primary"
                                    >
                                        <Link href="/contact">Contact Us</Link>
                                    </Button>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* <div className="mt-3 flex items-center gap-4 lg:hidden">
                            <Button asChild size="sm" className="rounded-full px-4">
                                <Link href="/signup" className="group ">
                                    Book Meeting
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="mt-px h-4 w-4 transition-transform group-hover:translate-x-1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                            </Button>
                        </div> */}
                    </nav>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
