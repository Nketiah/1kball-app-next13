"use client";

import React from "react";


interface CheckBoxProps {
    indeterminate: boolean;
}


const CheckBox = ({ indeterminate, ...rest }: CheckBoxProps, ref: any) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
};

export default CheckBox;
