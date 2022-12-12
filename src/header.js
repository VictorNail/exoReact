const Header = () =>{
    const title ="Sup de Vinci";
    const displaytitle = true;

    const menuItem =[
        {
            name: "Home",
            link:"/"
        },
        {
            name: "About",
            link:"/about"
        },
        {
            name: "Contact",
            link:"/contact"
        },

    ];

    

    return(
        <header>
            {displaytitle && <h1>{title}</h1>}

            <nav>
                <ul>
                    {menuItem.map((item,index)=> {
                        return(
                            <li key={index}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header;