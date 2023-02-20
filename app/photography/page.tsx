import Image from "next/image";
import img1 from '../../public/images/60F217B2-8428-4CB8-A4C6-FA8B9537633B_1_105_c.jpeg';
import img2 from '../../public/images/0726CFE4-57FE-4098-BFFA-660C2BC18890_1_105_c.jpeg';
import img3 from '../../public/images/784D5ED3-F08A-4EAE-9830-46FBD9795BB3_1_105_c.jpeg';
import img4 from '../../public/images/56309A6A-BCBF-4DF9-85FF-0016F45C282D_1_105_c.jpeg';
import img5 from '../../public/images/DA3C5FA1-4C29-46CF-B40D-7DD2453A6AB9_1_105_c.jpeg';
 


export default function Photography() {
    return (
        <>
            <Image src={img1} alt="aka" width={1024} height={720} className="my-5"/>
            <Image src={img2} alt="aka" width={1024} height={720} className="my-5"/>
            <Image src={img3} alt="aka" width={1024} height={720} className="my-5"/>
            <Image src={img4} alt="aka" width={1024} height={720} className="my-5"/>
            <Image src={img5} alt="aka" width={1024} height={720} className="my-5"/>
        </>
    );
}
