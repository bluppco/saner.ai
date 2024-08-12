// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT REACT ICONS
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5"

// IMPORT JSX ATOMS
import HeadingTwo2XlBoldJSX from "@/atoms/atoms-shiva/headings/two/2xl/bold/jsx"
import LinkJSX from "@/atoms/links/jsx"
import ParagraphSmGrayJSX from "@/atoms/atoms-shiva/paragraphs/sm/gray/hover-black/jsx"
import ParagraphSmMediumJSX from "@/atoms/atoms-shiva/paragraphs/sm/medium/jsx"

const HeaderMobile = ( { header_data, logo_link, logo_title } ) => {

    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState({})
    
    const toggleNavbar = () => (

        setIsNavOpen( !isNavOpen )

    )

    const toggleDropdown = ( index ) => (

        setIsDropdownOpen( ( prevState ) => ({

            ...prevState,
            [index]: !prevState[index]

        }))

    )

    return (

        <mobilenav className="md:hidden flex justify-center">
            <div className="relative w-full flex items-center justify-between px-4 z-30">
                <LinkJSX href={ logo_link }>
                    <HeadingTwo2XlBoldJSX>{ logo_title }</HeadingTwo2XlBoldJSX>
                </LinkJSX>
                <div className="cursor-pointer" onClick={ toggleNavbar }>
                    { isNavOpen ? <IoClose size={ 30 } /> : <IoMenu size={ 30 } /> }
                </div>
            </div>
            <ul className={`absolute w-full p-6 bg-white flex flex-col justify-center gap-6 duration-500 overflow-hidden ease-in-out ${ isNavOpen ? "-translate-y-0 top-10" : "-translate-y-full top-0" }`}>
                {

                    header_data.map( ( item, index ) => (

                        <li className="flex flex-col" onClick={ item.data.has_dropdown ? () => toggleDropdown(index) : null }>
                            <div className="flex items-center gap-2">
                                <LinkJSX href={ item.data.link ? item.data.link : null }>
                                    <ParagraphSmGrayJSX>{ item.data.title }</ParagraphSmGrayJSX>
                                </LinkJSX>
                                {

                                    item.data.has_dropdown &&
                                    <IoChevronDown size={ 15 } />

                                }
                            </div>
                            {

                                item.data.has_dropdown &&
                                <div className={`flex flex-col gap-4 duration-300 overflow-hidden ${ isDropdownOpen[index] ? "max-h-screen p-4" : "max-h-0" }`}>
                                    {

                                        item.data.items.map( ( item ) => (
                                            
                                            <LinkJSX href={ item.link }>
                                                <ParagraphSmMediumJSX>{ item.title }</ParagraphSmMediumJSX>
                                            </LinkJSX>

                                        ))

                                    }
                                </div>

                            }
                        </li>

                    ))

                }
            </ul>
        </mobilenav>

    )

}
export default HeaderMobile
