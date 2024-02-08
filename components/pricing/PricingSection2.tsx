"use client";

import { dataPricing6 as dataPricing, dataPricingEn6 } from "@/data/pricing";
import { TPricing, TPricingPlanType } from "@/types/pricing";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Reveal from "../utils/Reveal";
import Pricebox from "./Pricebox";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default function PricingSection2({ lang }: { lang: string }) {
    const [pricintPlanType, setPricintPlanType] = useState<TPricingPlanType>("monthly");
    const [visibleData, setVisibleData] = useState<TPricing[]>([]);
    const [totalPrice, setTotalPrice] = useState<{ min: number; max: number }>({ min: 0, max: 0 });
    const [selections, setSelections] = useState<Record<string, string>>({
        APIUsage: "Light",
        Development: "Light",
        Training: "Light",
        Support: "Light",
    });

    let data: TPricing[] = [];
    lang === "ru" ? (data = dataPricing) : (data = dataPricingEn6);

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
                                <h3>Использование AI API</h3>
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
                                            Ограниченное использование API для базовых функций
                                            чат-бота с низким объемом запросов
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
                                            Умеренное использование API для более сложных
                                            взаимодействий и среднего объема запросов
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
                                            Интенсивное использование API для высоконагруженных и
                                            сложных систем с высоким объемом запросов
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 border border-primary rounded p-4">
                                <h3>Разработка и настройка</h3>
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
                                            Простая интеграция с ограниченной настройкой и базовым
                                            набором функций
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
                                            Средняя сложность с интеграцией нескольких функций,
                                            настройкой под специфические потребности и средним
                                            уровнем кастомизации
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
                                            Высокая сложность проекта, включая полную интеграцию с
                                            бизнес-процессами, разработку специализированных модулей
                                            и высокую степень кастомизации
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-center gap-4 ">
                            <div className="col-lg-5 border border-primary rounded p-4">
                                <h3>Обучение и тестирование</h3>
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
                                            Основное обучение с использованием стандартных данных и
                                            сценариев, минимальное тестирование
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
                                            Расширенное обучение с использованием специализированных
                                            данных, включая тестирование и оптимизацию
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
                                            Глубокое обучение на основе большого объема
                                            специфических данных, комплексное тестирование в
                                            различных сценариях
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 border border-primary rounded p-4">
                                <h3>Поддержка и обновления</h3>
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
                                            Базовая поддержка с ограниченными обновлениями и
                                            минимальным мониторингом
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
                                            Профессиональная поддержка с регулярными обновлениями,
                                            активным мониторингом и улучшениями
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
                                            Круглосуточная поддержка, постоянные обновления и
                                            оптимизация, высокий уровень настраиваемости и гарантии
                                            SLA
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
                                        Общая стоимость:
                                    </span>{" "}
                                    <span style={{
                                        fontSize: "1.5rem",
                                    }}>{`${min} ~ ${max}`} $</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
