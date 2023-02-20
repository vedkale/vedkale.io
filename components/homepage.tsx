import Image from "next/image";
import { GitHubIcon, KaggleIcon } from "./icons";

export default function Homepage() {
    return (
        <>
            <section className="font-sans">
                <h1 className="font-bold text-3xl">Ved Kale</h1>
                <p className="my-5 max-w-md">Hi, I'm Ved. I'm a <strong>Software Engineer at Microsoft
                    </strong>, I work in the <strong>Azure Arc</strong> team, where we build 
                    technologies to extend the Azure platform run across the multicloud environment.
                </p>
                <div>
                    <a href="https://kaggle.com/vedkale" className="flex items-center gap-3 text-neutral-500 mt-5 ml-0">
                        <KaggleIcon />
                        kaggle Competitions Expert
                    </a>
                    <a href="https://kaggle.com/vedkale" className="flex items-center gap-3 text-neutral-500 mt-3 ml-0">
                        <GitHubIcon />
                        vedkale
                    </a>
                </div>
            </section>
        </>
    );
}