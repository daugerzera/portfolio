import { Link } from "@/i18n/routing";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function NotFound() {
    return (
        <div lang="en" className={workSans.className}
            style={{
                backgroundColor: "#000000",
                textAlign: "center",
                padding: "8rem"
            }}>
            <h1 className="text-[2rem] mb-4">404 - Page not found</h1>
            <p></p>
            <Link href="/" style={{ color: "white", textDecoration: "underline" }}>
                {`Go back to the main page`}
            </Link>
        </div >
    );
}
