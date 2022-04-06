import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={414}
    height={184}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.653-232.848C71.915-285.7 143.7-262.813 207.378-277.923c66.124-15.691 141.742-78.757 190.852-43.807 49.283 35.073 18.299 123.575 17.127 191.816-1.126 65.568 22.042 136.785-23.718 192.028-45.534 54.971-118.992 38.733-182.303 56.689-71.761 20.353-153.632 91.398-207.368 53.832-53.812-37.619-18.929-134.71-14.943-209.246 3.597-67.246-12.614-142.311 36.628-196.237Z"
      fill="#85BB4E"
    />
  </Svg>
)

export default SvgComponent
