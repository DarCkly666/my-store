import React, { ReactElement, useEffect, useState } from "react";

const Gallery = ({
  items,
  autoStart = false,
  delay = 2000,
}: {
  items: Array<string>;
  autoStart?: boolean;
  delay?: number;
}): ReactElement => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <div style={{ width: "100%", height: "80%" }}>
        <img
          src={items[current]}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div style={{ width: "100%", height: "20%" }}>
        <ul
          style={{
            width: "100%",
            height: "100%",
            overflowX: "scroll",
            display: "flex",
            listStyleType: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {items.map((item: string, index: number) => (
            <li key={index} onClick={() => setCurrent(index)}>
              <img
                src={item}
                alt={item}
                style={{
                  height: "100%",
                  width: "100px",
                  objectFit: "cover",
                  objectPosition: "center",
                  cursor: "pointer",
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
