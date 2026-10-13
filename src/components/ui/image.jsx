import * as React from "react"

const FALLBACK_IMAGE_URL =
  "https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png"

const Image = React.forwardRef((
  {
    src,
    fittingType = "fill",
    originWidth: _originWidth,
    originHeight: _originHeight,
    focalPointX: _focalPointX,
    focalPointY: _focalPointY,
    quality: _quality,
    style,
    ...props
  },
  ref
) => (
  <img
    ref={ref}
    src={src || FALLBACK_IMAGE_URL}
    {...props}
    style={{
      objectFit: fittingType === "fit" ? "contain" : "cover",
      ...style,
    }}
    data-empty-image={!src || undefined}
  />
))

Image.displayName = "Image"

export { Image }
