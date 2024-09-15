import "./VedioPlayer.css";
import vedio from "../../assets/vedio-player.png.mp4";
import { useRef } from "react";

function VedioPlayer({play, setPlay}) {

  const player = useRef(null);

 const closePlayer = (e)=>{
  if(e.target === player.current){
    setPlay(false)
  }
 }

  return (
    <div className={`vedio-player ${play ? "" : "hide"}`} ref={player} onClick={closePlayer}>
      <video src={vedio}  muted controls></video>
    </div>
  );
}

export default VedioPlayer;
