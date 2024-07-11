export const Header = () => {
    return (
        <header className="sticky top-0 py-4 flex flex-row font-bold items-center">
            <h1 className="mx-8 uppercase text-xs whitespace-nowrap">your name</h1>
            {/* <ul className="flex flex-row gap-x-4 ml-auto mr-8 uppercase font-bold text-xs whitespace-nowrap">
                <li>
                    <a href="" title="CV section quick acess">cv</a>
                </li>
                <li>
                    <a href="" title="Achievements section quick acess">achievements gallery</a>
                </li>
                <li>
                    <a href="" title="Contact section quick acess">contact</a>
                </li>
            </ul> */}
            <div className="flex flex-col gap-y-1.5">
            <div className="w-8 bg-current h-0.5 rounded"></div>
            <div className="w-8 bg-current h-0.5 rounded"></div>
            <div className="w-8 bg-current h-0.5 rounded"></div>
            </div>
        </header>
    )
}