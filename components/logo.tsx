import { Link } from "lucide-react";
import Image from "next/image";
import loclaFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = loclaFont({
    src: "../../public/fonts/font.woff2",
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image
                    src="/public/logo.svg"
                    alt="Logo"
                    height={30}
                    width={30}
                />
                <p
                    className={cn(
                        "text-lg text-neutral-700 pb-1",
                        headingFont.className
                    )}
                >
                    Nirmay
                </p>
            </div>
        </Link>
    );
};
