import React, { ReactNode } from "react";

const Container:React.FC<{children:ReactNode,className:string}> = (props) => {
  return (
    <section className={props.className}>
      <div className="container-xxl">{props.children}</div>
    </section>
  );
};

export default Container;
