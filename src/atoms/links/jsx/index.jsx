const LinkJSX = ( { aria_label, href, children } ) => (

    <a class="block" href={ href } aria-label={ aria_label }>
        { children }
    </a>

)
export default LinkJSX
