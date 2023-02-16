// components/Image.js
import NextImage from "next/image";
const BASE_PATH = process.env.NODE_ENV == 'development' ? '' : '/bee-ui'

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return BASE_PATH+src
}

export default function Image(props) {
  return (
    <NextImage
      {...props}
      width={!props.width?100:props.width}
      height={!props.width?100:props.height}
      loader={customLoader}
      unoptimized={true}
    />
  );
}