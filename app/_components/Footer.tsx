import { Facebook } from "./social_icons/Facebook"
import { Instagram } from "./social_icons/Instagram"
import { Linkedin } from "./social_icons/Linkedin"
import { Tiktok } from "./social_icons/Tiktok"
import { X } from "./social_icons/X"
import { Youtube } from "./social_icons/Youtube"

export const Footer = () => {
    return (
        <footer>
            <div>your name</div>
            <div>title/role/qualification</div>
            <div>
                made by 
                <a href="simonbenet.com">Simon Bénet</a>
                in 2024
            </div>
            <div>
                <Facebook/>
                <Instagram/>
                <Linkedin/>
                <Tiktok/>
                <X/>
                <Youtube/>
            </div>
        </footer>
    )
}