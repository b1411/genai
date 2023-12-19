import {TUseCaseVariants, TUsecaseMetadata} from "@/types/usecase";
import classNames from "classnames";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faHeadset,
    faChartLine,
    faGraduationCap,
    faCubes,
    faChartBar,
    faCogs,
    faLightbulb,
    faFlask, IconDefinition
} from "@fortawesome/free-solid-svg-icons";

type TUsecaseProps = {
    data: TUsecaseMetadata;
    variant?: TUseCaseVariants;
}

const icons = {
    "headset": faHeadset,
    "chart-line": faChartLine,
    "graduation-cap": faGraduationCap,
    "cubes": faCubes,
    "chart-bar": faChartBar,
    "cogs": faCogs,
    "lightbulb": faLightbulb,
    "flask": faFlask,
}

export default function Usecase({data, variant = "none"}: TUsecaseProps) {
    const {title, description, icon, slug} = data;

    return (
        <div
            className={classNames("d-flex flex-column justify-between gap-6 h-full", {
                "text-center": variant === "center-styled",
            })}
        >
            <div
                className={classNames(
                    "icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 text-primary-dark  ",
                    {
                        "p-2 border bg-gradient-3 border-primary border-white border-opacity-10":
                            variant === "none",
                        "mx-auto": variant === "center-styled",
                    }
                )}
            >
                <FontAwesomeIcon className={classNames("p-1")} icon={icons[icon as keyof typeof icons]}/>
            </div>
            <div className="content flex-grow-1">
                <h5 className="text-white mb-4">{title}</h5>
                <p className="mb-0">{description}</p>
            </div>

            <div className="flex-shrink-0">
                <Link
                    href={`/use-cases/${slug}`}
                    className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
                >
                    <span>{title}</span>
                    <i className="ti ti-arrow-up-right fs-5"></i>
                </Link>
            </div>
        </div>
    );
}
