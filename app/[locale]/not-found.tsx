import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function NotFound() {
    return (
        <html lang="en" className={workSans.className}
            style={{
                backgroundColor: "#000000",
                textAlign: "center",
                padding: "8rem"
            }}>
            <body>

                <h1 style={{ color: "#FFFFFF" }}>404 - Page not found</h1>
                <p></p>
                <a href="/" style={{ color: "white", textDecoration: "underline" }}>
                    {`Go back to the main page`}
                </a>
            </body>
        </html >
    );
}
