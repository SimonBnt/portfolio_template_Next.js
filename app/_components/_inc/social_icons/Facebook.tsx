import { ComponentPropsWithoutRef } from "react"

export const Facebook = (props: ComponentPropsWithoutRef<"svg"> & {size : number}) => {
    return (
        <svg
            width={props.size} 
            height={props.size} 
            viewBox="-5 0 20 20" 
            version="1.1" 
            preserveAspectRatio="xMidYMid"
            {...props}>
            <g>
                <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"></path>
                    </g>
                </g>
            </g>
        </svg>
    )
}