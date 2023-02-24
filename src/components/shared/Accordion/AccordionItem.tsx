import { Collapse } from "react-collapse";
import { AiOutlineCaretDown } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";

type AccordionItemPropType = {
    openAccordionBody: boolean;
    id: number;
    toggleAccordion:(index: number) => void;
    accordion:{
        title:string;
        answer:string;
    }
};
const AccordionItem = (props: AccordionItemPropType) => {
    const { openAccordionBody, toggleAccordion, id, accordion } = props;

    return (
        <div>
            <article
                className="border-b"
                onClick={() => toggleAccordion(id)}
            >
                <div
                    className={`transition-all duration-700 border-l-4  bg-grey-lightest ${
                        !openAccordionBody
                            ? "border-transparent"
                            : "border-stone-800 dark:border-red-500 "
                    } `}
                >
                    <header className="flex justify-between items-center py-4 px-5 pl-8 pr-8 cursor-pointer select-none">
                        <span className="text-indigo font-thin text-lg">
                            {accordion?.title}
                        </span>
                        <div className="flex items-center justify-center">
                            {openAccordionBody ? (
                                <TiArrowSortedUp className="text-xl transition-all duration-1000 dark:text-red-400" />
                            ) : (
                                <AiOutlineCaretDown className="transition-all duration-1000 " />
                            )}
                        </div>
                    </header>
                    <Collapse isOpened={openAccordionBody}>
                        <div>
                            <div className="pl-8 pr-8  pb-5 text-grey-darkest">
                                <ul className="pl-4">
                                    <li className="pb-2 text-sm">
                                        {accordion?.answer}
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </article>
        </div>
    );
};

export default AccordionItem;
