import { Facebook } from "./social_icons/Facebook"
import { Instagram } from "./social_icons/Instagram"
import { Linkedin } from "./social_icons/Linkedin"
import { Tiktok } from "./social_icons/Tiktok"
import { X } from "./social_icons/X"
import { Youtube } from "./social_icons/Youtube"

export const SocialIconList = () => {
    return (
        <ul className="flex flex-row gap-x-4 items-center">
                <li>
                    <a href="" title="link to my facebook profile" className="">
                        <Facebook size={12} />
                    </a>
                </li>
                <li>
                    <a href="" title="link to my instagram profile">
                        <Instagram size={12}/>
                    </a>
                </li>
                <li>
                    <a href="" title="link to my linkedin profile">
                        <Linkedin size={12}/>
                    </a>
                </li>
                <li>
                    <a href="" title="link to my tiktok profile">
                        <Tiktok size={12}/>
                    </a>
                </li>
                <li>
                    <a href="" title="link to my X profile">
                        <X size={12}/>
                    </a>
                </li>
                <li>
                    <a href="" title="link to my youtube chanel">
                        <Youtube size={12}/>
                    </a>
                </li>
            </ul>
    )
}