"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

const navItems = {
    "/": {
        name: "Home",
        x: 0,
        y: 0,
        w: "64px",
    },
    "/about": {
        name: "About",
        x: 65,
        y: 35,
        w: "64px",
    },
    "/photography": {
        name: "Photography",
        x: 130,
        y: 69,
        w: "117px",
    },
};

export default function Sidebar() {
    let pathname = usePathname() || "/";

    return (
        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-sans">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-00">
                        {navItems[pathname] ? (
                            <>
                                <div className="hidden md:block">
                                    <motion.div
                                        className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                                        layoutId="test2"
                                        initial={{
                                            opacity: 0,
                                            y: navItems[pathname].y,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: navItems[pathname].y,
                                            width: navItems[pathname].w,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                </div>

                                <div className="block md:hidden">
                                    <motion.div
                                        className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                                        layoutId="test2"
                                        initial={{
                                            opacity: 0,
                                            x: navItems[pathname].x,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: navItems[pathname].x,
                                            width: navItems[pathname].w,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                </div>
                            </>
                        ) : null}
                        {Object.entries(navItems).map(([path, { name }]) => {
                            const isActive = path === pathname;

                            return (
                                <Link
                                    href={path}
                                    key={path}
                                    className={clsx(
                                        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]",
                                        {
                                            "text-neutral-500": !isActive,
                                            "font-bold": isActive,
                                        }
                                    )}
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    );
}
