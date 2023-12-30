"use client";
import { dataBlockFeatures, dataBlockFeaturesEn } from "@/data/blockfeature";
import BlockFeature from "./BlockFeature";
import { usePathname } from "next/navigation";

export default function BlockFeatureSection() {
    let data = [];
    const router = usePathname().split("/")[1].toString();
    const lang = router;
    if (lang == "en") {
        data = dataBlockFeaturesEn;
    } else {
        data = dataBlockFeatures;
    }

    return (
        <section className="py-10 py-lg-15">
            <div className="container">
                {data.map((blockFeature, index) => (
                    <BlockFeature
                        key={blockFeature.id}
                        index={index}
                        data={blockFeature}
                        reversed={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
}
