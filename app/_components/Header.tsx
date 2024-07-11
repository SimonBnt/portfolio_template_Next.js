import { Facebook } from "./social_icons/Facebook"
import { Instagram } from "./social_icons/Instagram"
import { Linkedin } from "./social_icons/Linkedin"
import { Tiktok } from "./social_icons/Tiktok"
import { X } from "./social_icons/X"
import { Youtube } from "./social_icons/Youtube"

export const Header = () => {
    return (
        <header className="sticky top-0">
            <h1>your name</h1>
            <ul>
                <li>
                    <a href="" title="link to my facebook profile">
                        <Facebook/>
                    </a>
                </li>
                <li>
                    <a href="" title="link to my instagram profile">
                        <Instagram/>
                    </a>
                </li>
                <li>
                    <a href="" title="link to my linkedin profile">
                        <Linkedin/>
                    </a>
                </li>
                <li>
                    <a href="" title="link to my tiktok profile">
                        <Tiktok/>
                    </a>
                </li>
                <li>
                    <a href="" title="link to my X profile">
                        <X/>
                    </a>
                </li>
                <li>
                    <a href="" title="link to my youtube chanel">
                        <Youtube/>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="" title="CV section quick acess">cv</a>
                </li>
                <li>
                    <a href="" title="Achievements section quick acess">achievements</a>
                </li>
                <li>
                    <a href="" title="Contact section quick acess">contact</a>
                </li>
            </ul>
        </header>
    )
}