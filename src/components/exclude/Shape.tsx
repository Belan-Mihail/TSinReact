import React from 'react'


type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoDShapeType = Exclude<ShapeType, "cube">;

type ThemeType = "dark" | "light";
type ColorType = "red" | "blue" | "yellow";

//combine ThemeType and ColorType
type ItemProps = {
    // color: `${ThemeType}-${ColorType}`;
    color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
  };


const Shape = (props:ItemProps) => {
    const shape: ShapeType = "cube";
    const twoDShape: TwoDShapeType = "square";
  return (
    <div>Shape</div>
  )
}

export default Shape

// ! TwoDShapeType can be any type as ShapeType but without "cube"; const twoDShape cant be 'cube'
// ! together combine and exclude "dark-yellow" value