export default function StepBox({
    stepNumber,
    title,
    text,
}: {
    stepNumber: number;
    title: string;
    text: string;
}) {
    return (
        <div className="border rounded w-full h-full border-primary-dark p-4 d-flex flex-column shadow">
            <div className="d-lex flex-row flex-nowrap justify-content-between">
                <div
                    className="text-primary-dark"
                    style={{
                        fontSize: "2.5rem",
                    }}
                >
                    {stepNumber}
                </div>
                <h4 className="">{title}</h4>
            </div>
            <div className="mt-3">
                <p className="step-box__text">{text}</p>
            </div>
        </div>
    );
}
