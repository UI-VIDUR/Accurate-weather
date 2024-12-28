import React, {useState} from 'react'
import { Switch } from '@headlessui/react'

function TempToggle() {

    const [enabled, setEnabled] = useState(true)

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-8 w-14 items-center rounded-full bg-slate-100 transition relative ring-2 ring-blue-100"
            >
            <span 
                className="size-6 translate-x-1 rounded-full transition text-blue-400 group-data-[checked]:translate-x-7 absolute 
                before:content-['°F'] group-data-[checked]:before:content-['°C'] bg-blue-200 group-data-[checked]:text-white group-data-[checked]:bg-blue-400 before:text-xs before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:leading-[normal] before:font-bold"
            />
        </Switch>
    )
}

export default TempToggle