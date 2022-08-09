import React from 'react'

const Title = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  return (
    <div className='title'>
        {props.children}
    </div>
  )
}

export default Title