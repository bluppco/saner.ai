// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT REACT ICONS
import { FiPlus, FiMinus } from "react-icons/fi"

// IMPORT JSX ATOMS
import HeadingThreeXl from "@/atoms/atoms-shiva/headings/three/xl/jsx"
import ParagraphLgJsx from "@/atoms/atoms-shiva/paragraphs/lg/jsx"

const AccordionComponent = ( { accordionData } ) => {

    const [activeIndex, setActiveIndex] = useState(null)
    const handleAccordionClick = (index) => {

        setActiveIndex( index === activeIndex ? null : index )

    }

    return (

		<div className="rounded-lg overflow-hidden">
			{
			
				accordionData.map( ( item, index ) => (

					<div onClick={ () => handleAccordionClick( index ) } className="cursor-pointer">
						<div className="flex justify-between items-center py-8 border-b border-gray-200">
							<HeadingThreeXl>{ item.title }</HeadingThreeXl>
							<div className="flex items-center justify-center rounded-full size-8 p-1 border border-gray-300">
								{

									activeIndex === index ? <FiMinus /> : <FiPlus />

								}
							</div>
						</div>
						<div className={`overflow-hidden duration-500 ease-in-out ${ activeIndex === index ? "max-h-screen" : "max-h-0" }`}>
                            <div className="px-6 py-4 bg-white">
                                <ParagraphLgJsx>{ item.content }</ParagraphLgJsx>
                            </div>
                        </div>
					</div>

				))
			
			}
		</div>

    )

}
export default AccordionComponent
