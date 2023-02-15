// components/Image.js
import NextImage from "next/image";

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

export default function Image(props) {
  return (
    <NextImage
      {...props}
      width={!props.width?100:propswidth}
      height={!props.width?100:propsheight}
      loader={customLoader}
    />
  );
}