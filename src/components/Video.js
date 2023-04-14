import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../firebase";

const Video = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  if (!user) {
    navigate("/");
  }
  console.log(user);
  const videos = [
    "https://firebasestorage.googleapis.com/v0/b/disneyplus-clone-68c0c.appspot.com/o/inside%20out.mp4?alt=media&token=bdf51fd8-d880-495e-8c90-df68a28ee541",
    "https://firebasestorage.googleapis.com/v0/b/disneyplus-clone-68c0c.appspot.com/o/Incredibles%202%20Official%20Trailer.mp4?alt=media&token=03e6b9a4-4736-4ed0-9a8c-3b08ec499d0a",
    "https://firebasestorage.googleapis.com/v0/b/disneyplus-clone-68c0c.appspot.com/o/soul.mp4?alt=media&token=2165b401-3049-4498-9df5-9daa122a3dac",
  ];
  const insideOutId = "pimdduMfhyaTsgKfdGiX";
  const incredibles2Id = "eKbHg0NHswb4DunTqEmD";
  const soulId = "p8FaWGkLiOXOboztYDtr";
  const { id } = useParams();

  let url;
  if (id === insideOutId) url = videos[0];
  else if (id === incredibles2Id) url = videos[1];
  else if (id === soulId) url = videos[2];
  else {
    let pos = Math.ceil(Math.random() * 3);
    if (pos === 3) pos = 0;
    url = videos[pos];
  }

  return (
    <div>
      <video style={{ width: "100%", height: "98vh" }} controls autoPlay>
        <source src={url} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Video;
