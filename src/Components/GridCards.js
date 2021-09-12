import React from "react";
import { col } from "antd";

function GridCards(props) {
  console.log(props);

  return (
    <col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <a href={`/music/${props.musicId}`}>
          <img />
        </a>
      </div>
    </col>
  );
}

export default GridCards;
