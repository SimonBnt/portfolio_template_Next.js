import { Section } from "../_inc/Section"

export const Main = () => {
    return (
        <main>
            <Section className="uppercase" name={"about me"}/>
            <Section className="uppercase" name={"achievments"}/>
            <Section className="uppercase" name={"skills"}/>
            <Section className="uppercase" name={"contact me"}/>
        </main>
    )
}