"use client";

import { TPricing, TPricingPlanType } from "@/types/pricing";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Reveal from "../utils/Reveal";
import Pricebox from "./Pricebox";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default function PricingSection2({ lang }: { lang: string }) {
    const [selections, setSelections] = useState<Record<string, string>>({
        APIUsage: "Light",
        Development: "Light",
        Training: "Light",
        Support: "Light",
    });

    const prices: Record<
        string,
        {
            Light: {
                min: number;
                max: number;
            };
            Medium: {
                min: number;
                max: number;
            };
            High: {
                min: number;
                max: number;
            };
        }
    > = {
        APIUsage: {
            Light: {
                min: 20,
                max: 100,
            },
            Medium: {
                min: 100,
                max: 400,
            },
            High: {
                min: 400,
                max: 1000,
            },
        },
        Development: {
            Light: {
                min: 500,
                max: 1000,
            },
            Medium: {
                min: 1000,
                max: 2000,
            },
            High: {
                min: 2000,
                max: 3000,
            },
        },
        Training: {
            Light: {
                min: 100,
                max: 150,
            },
            Medium: {
                min: 150,
                max: 200,
            },
            High: {
                min: 200,
                max: 500,
            },
        },
        Support: {
            Light: {
                min: 50,
                max: 100,
            },
            Medium: {
                min: 100,
                max: 500,
            },
            High: {
                min: 500,
                max: 1000,
            },
        },
    };

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setSelections((prev) => ({ ...prev, [name]: value }));
    }

    function calculateTotalPrice() {
        let minPrice = 0;
        let maxPrice = 0;
        Object.keys(selections).forEach((key) => {
            const level = selections[key];
            const price = prices[key][level as "Light" | "Medium" | "High"];
            minPrice += price.min;
            maxPrice += price.max;
        });
        return { min: minPrice, max: maxPrice };
    }

    const dict = getDictionary(lang).pricingPlans;

    const { min, max } = calculateTotalPrice();

    return (
        <section className="py-10 py-lg-15">
            <div className="container">
                <div className="row justify-center mb-18">
                    <div className="col-lg-10">
                        <div className="text-center">
                            <Reveal el="p" className="text-primary-dark" delay={0.05}>
                                {dict.pricingSection2.subtitle}
                            </Reveal>
                            <Reveal el="h1" className="text-white mb-5" delay={0.1}>
                                {dict.pricingSection2.title}
                            </Reveal>
                            <Reveal el="p" className="mb-0" delay={0.15}>
                                {dict.pricingSection2.description}
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="row g-6">
                    <div className="col-lg-12">
                        <div className="justify-center gap-4 row mb-4">
                            <div className="col-lg-5 border border-primary rounded p-4">
                                <h3>{dict.pricingSection2.calculator.APIUsage.title}</h3>
                                <div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="APIUsage"
                                            value={"Light"}
                                            id="APIUsageLight"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="APIUsageLight" className="form-check-label">
                                            {dict.pricingSection2.calculator.APIUsage.light}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="APIUsage"
                                            value={"Medium"}
                                            id="APIUsageMedium"
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor="APIUsageMedium"
                                            className="form-check-label"
                                        >
                                            {dict.pricingSection2.calculator.APIUsage.medium}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="APIUsage"
                                            value={"High"}
                                            id="APIUsageHigh"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="APIUsageHigh" className="form-check-label">
                                            {dict.pricingSection2.calculator.APIUsage.high}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 border border-primary rounded p-4">
                                <h3>{dict.pricingSection2.calculator.Development.title}</h3>
                                <div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="Development"
                                            value={"Light"}
                                            id="DevelopmentLight"
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor="DevelopmentLight"
                                            className="form-check-label"
                                        >
                                            {dict.pricingSection2.calculator.Development.light}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="Development"
                                            value={"Medium"}
                                            id="DevelopmentMedium"
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor="DevelopmentMedium"
                                            className="form-check-label"
                                        >
                                            {dict.pricingSection2.calculator.Development.medium}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="Development"
                                            value={"High"}
                                            id="DevelopmentHigh"
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor="DevelopmentHigh"
                                            className="form-check-label"
                                        >
                                            {dict.pricingSection2.calculator.Development.high}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-center gap-4 ">
                            <div className="col-lg-5 border border-primary rounded p-4">
                                <h3>{dict.pricingSection2.calculator.Training.title}</h3>
                                <div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="Training"
                                            value={"Light"}
                                            id="TrainingLight"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="TrainingLight" className="form-check-label">
                                            {dict.pricingSection2.calculator.Training.light}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="Training"
                                            value={"Medium"}
                                            id="TrainingMedium"
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor="TrainingMedium"
                                            className="form-check-label"
                                        >
                                            {dict.pricingSection2.calculator.Training.medium}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="Training"
                                            value={"High"}
                                            id="TrainingHigh"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="TrainingHigh" className="form-check-label">
                                            {dict.pricingSection2.calculator.Training.high}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 border border-primary rounded p-4">
                                <h3>{dict.pricingSection2.calculator.Support.title}</h3>
                                <div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="Support"
                                            value={"Light"}
                                            id="SupportLight"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="SupportLight" className="form-check-label">
                                            {dict.pricingSection2.calculator.Support.light}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="Support"
                                            value={"Medium"}
                                            id="SupportMedium"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="SupportMedium" className="form-check-label">
                                            {dict.pricingSection2.calculator.Support.medium}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="Support"
                                            value={"High"}
                                            id="SupportHigh"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="SupportHigh" className="form-check-label">
                                            {dict.pricingSection2.calculator.Support.high}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 mx-auto">
                                <div>
                                    <span
                                        className="text-primary-dark"
                                        style={{
                                            fontSize: "1.5rem",
                                        }}
                                    >
                                        {dict.pricingSection2.calculator.total}:
                                    </span>{" "}
                                    <span
                                        style={{
                                            fontSize: "1.5rem",
                                        }}
                                    >
                                        {`${min} ~ ${max}`} $
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
