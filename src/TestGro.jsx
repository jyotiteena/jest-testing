import React from 'react'

const TestGro = () => {
    return (
        <div>
            What is Describe?
            How to make test cases Group?
            Run test case with Describe.
            Skip in Describe.  /////// describe.only()
            Only in Describe. , /////// describe.skip()
            Nested Describe.  //////////// describe into describe

            {/* //// describe use for grouping /////////// */}
            <div>
                <input type="text" placeholder='enter username' name='test' id='uId' value="jyoti jingar" readOnly />
            </div>
        </div>
    )
}

export default TestGro
