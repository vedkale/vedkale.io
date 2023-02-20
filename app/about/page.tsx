import {
    ArrowIcon,
    Envelope,
    GitHubIcon,
    LinkedInIcon,
} from "../../components/icons";

export default function About() {
    return (
        <>
            <div className="max-w-xl">
                <p>Hey, I'm Ved.</p>
                <p className="mt-2">
                    I love building things. I try to learn whatever I can to
                    build stuff, including this website. Outside of coding, I
                    like photography and doing data science competitions.
                </p>
                <div className="flex flex-col gap-2 md:flex-row md:gap-2 mt-5">
                    <a
                        href="https://github.com/vedkale"
                        className="flex gap-2 w-full border border-neutral-800 rounded-lg no-underline items-center text-neutral-400 p-4 hover:bg-neutral-900 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <GitHubIcon />
                            <div className="ml-2">GitHub</div>
                        </div>
                        <ArrowIcon />
                    </a>

                    <a
                        href="https://linkedin.com/in/vedkale"
                        className="flex gap-2 w-full border border-neutral-800 rounded-lg no-underline items-center text-neutral-400 p-4 hover:bg-neutral-900 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <p className="invert">
                                <LinkedInIcon />
                            </p>
                            <div className="ml-2">LinkedIn</div>
                        </div>
                        <ArrowIcon />
                    </a>
                    <a
                        href="mailto:vedpkale@outlook.com"
                        className="flex gap-2 w-full border border-neutral-800 rounded-lg no-underline items-center text-neutral-400 p-4 hover:bg-neutral-900 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <Envelope />
                            <div className="ml-2">Email</div>
                        </div>
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </>
    );
}
