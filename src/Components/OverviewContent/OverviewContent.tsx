import { ContactRoles } from "../ContactRoles/ContactRoles"
import { TimeUnits } from "../TimeUnits/TimeUnits"


export const OverviewContent: React.FC = () => {
    return (
        <>
            <TimeUnits />
            <ContactRoles />
        </>
    )
}