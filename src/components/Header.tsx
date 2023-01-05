interface HeaderProps {
    /**
     * Logoteksti stringina
     */
    logo: string
    /**
     * Otsikkoteksti stingina
     */
    headerTxt: string
}

/**
 * Header-komponentti
 * 
 * @param props komponentin propsit
 * @returns komponentin sisällön
 */
const Header = ( props: HeaderProps ) => {
    return(
        <div className="header">
            <p className="headp">{props.logo}</p>
            <h1 className="headh1">{props.headerTxt}</h1>
        </div>
    )
};

export default Header;
