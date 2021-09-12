import GridCards from "Components/GridCards";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, IMG_BASE_URL } from "./../api";
import { API_KEY } from "./../api";
import { Row } from "antd";

const Home = () => {
  const [Music, setMusic] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URL}?method=tag.gettopalbums&tag=disco&api_key=${API_KEY}&format=json`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        // Music state에 넣어준다.
        setMusic([response.albums.album]);
        console.log(response.albums.album);
      });
  }, []);

  return (
    <div style={{ width: "100%", margin: "0" }}>
      <div styled={{ width: "85%", margin: "1rem auto" }}>
        <h1>Top Albums</h1>
        <hr />

        <Row>
          {Music &&
            Music.map((music, index) => {
              <React.Fragment key={index}>
                <GridCards
                  image={
                    music.image
                      ? `${IMG_BASE_URL}174s/6a487f3e10b22a5d089fbe6a3a376e70.png`
                      : null
                  }
                  musicId={index}
                  /* musicName={music.artist.url} */
                />
              </React.Fragment>;
            })}
        </Row>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Load More</button>
      </div>
    </div>
  );
};

export default Home;
