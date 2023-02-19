import Image from "next/image";
import { KaggleIcon } from "./icons";

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
                    <a className="flex items-center gap-2">
                        <KaggleIcon />
                        Kaggle Competitions Expert
                    </a>
                    <p>Kaggle Competitions Expert</p>
                </div>
            </section>
        </>
    );
}