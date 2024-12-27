/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
const CustomButton = ({ tagName, size, type, selectTag, selected, variant }) => {
  const tagStyle = {
    HTML: "outline-success",
    CSS: "outline-info",
    JavaScript: "outline-warning",
    React: "outline-primary",
    default: "outline-dark",
  };
   // Determine the button variant
   const computedVariant = variant || (selected ? tagStyle[tagName] : tagStyle.default);
  return (
    <Button
      variant={computedVariant}
      className="me-1 py-1 px-3 rounded-3"
      dangerouslySetInnerHTML={{ __html: tagName }}
      size={size}
      type={type}
      onClick={() => selectTag(tagName)}
    />
  );
};

export default CustomButton;
