import { TUseCaseVariants } from "@/types/usecase";
import { getUsecasesMetadata } from "@/utils/usecases";
import React from "react";
import Reveal from "../utils/Reveal";
import Usecase from "./Usecase";

type TUseCaseSectionProps = {
    limit?: number;
    variant?: TUseCaseVariants;
    lang: string;
};

export default function UsecaseSection({
    variant = "none",
    limit = 0,
    lang,
}: TUseCaseSectionProps) {
    const dataUsecases = getUsecasesMetadata(limit, lang);

    return (
        <React.Fragment>
            {dataUsecases.map((usecase) => (
                <Reveal key={usecase.slug} className="col" delay={0.15}>
                    <Usecase data={usecase} variant={variant} />
                </Reveal>
            ))}
        </React.Fragment>
    );
}
