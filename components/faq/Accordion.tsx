import { TFaq } from "@/types/faq";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type TAccordionProps = {
    data: TFaq;
    index: number;
    expanded: boolean | number;
    setExpanded: Dispatch<SetStateAction<number | boolean>>;
}

export default function Accordion({ data, index, expanded, setExpanded }: TAccordionProps) {
    const { header, body } = data;

    const isOpen = index === expanded;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => setExpanded(isOpen ? false : index)}
                >
                    <span className="icon"></span>
                    {header}
                </button>
            </h2>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div className="accordion-collapse collapse show"
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, visibility: "visible", height: "auto" },
                            collapsed: { opacity: 0, visibility: 'hidden', height: 0 }
                        }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}>
                        <div className="accordion-body">
                            {body}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
