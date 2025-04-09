import React, { useState } from 'react'

const ClickEvent = () => {
    const [data,setData] = useState("");
    return (
        <div>
            Make Button and state in the component.
            Update state with button click event.
            Import component in test file.
            Write code for test click event.
            Run test case.
            <br />
            <button onClick={()=>setData("click testing")}>add data</button>
            <h1>{data}</h1>
        </div>
    )
}

export default ClickEvent
