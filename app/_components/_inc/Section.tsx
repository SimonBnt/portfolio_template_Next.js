import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

export const Section = (props: PropsWithChildren<{ className?: string }> & {name : string}) => {
    return (
        // max-w-3xl => max-width: 48rem (768px) | px-4 => padding-left: 1rem + padding-right: 1rem | m-auto => margin-left: auto + margin-right: auto
        <section className={cn("max-w-3xl px-4 m-auto", props.className)}>{props.children}
            <h2>{props.name}</h2>
        </section>
    )
}