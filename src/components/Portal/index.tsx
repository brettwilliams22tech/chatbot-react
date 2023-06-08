import React from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  node?: HTMLElement;
  id?: string;
  children: React.ReactNode;
};

/**
 * use body to append the elements from render props if node is not provided
 */
const Portal: React.FC<PortalProps> = (props) => {
  const container = props.node || document.body;

  return createPortal(props.children as any, container);
};

export default Portal;
