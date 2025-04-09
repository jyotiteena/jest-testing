import React, { useState } from 'react'

const ChangeEvent = () => {
    const [data, setData] = useState("")
    return (
        <div>
            Make Input box in the component
            Define state and use with on change event
            Import component in test file
            Write code for test case
            Run test case
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
        </div>
    )
}

export default ChangeEvent
