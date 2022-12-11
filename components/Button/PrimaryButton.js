import { Icon } from '@iconify/react'
import Link from 'next/link'

// You can get icons from iconify - just add the name on the Primary Button Props
const PrimaryButton = ({text, icon, link}) => {
    return (
        <Link
            href = { link }
            role ="button"
            className="flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8 bg-primary-500 text-white py-[5px] rounded-full hover:bg-primary-300 transition-all duration-300"
        >
            { text }
            {
                    icon?.length > 0 
                    ? (
                        <Icon icon={icon}/>    
                    ) : null
            }
        </Link>
    )
}

export default PrimaryButton