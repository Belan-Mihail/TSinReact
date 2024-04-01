import React from 'react'

type ItemPropsType<T> = {
    id: number,
    title: string,
    extra: T[],
}

const Item = (props:ItemPropsType<object>) => {
  return (
    <div>Item</div>
  )
}

export default Item