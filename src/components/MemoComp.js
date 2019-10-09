import React, { memo } from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

export default memo(MemoComp)
