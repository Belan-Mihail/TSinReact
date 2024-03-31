import React from 'react'
import Child from '../components/children/Child'
import Parent from '../components/children/Parent'

function PageForParentAndChild() {
  return (
    <div>
        <Parent>
            <Child />
        </Parent>

    </div>
  )
}

export default PageForParentAndChild