import React, { ReactElement } from "react";

const Gallery = ({
  items,
  autoStart = false,
  delay = 2000,
}: {
  items: Array<string>;
  autoStart: boolean;
  delay: number;
}): ReactElement => {
  return (
    <div>
      <h3>Gallery</h3>
    </div>
  );
};

export default Gallery;
