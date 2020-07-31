import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src="https://v16m.tiktokcdn.com/93e5030b13667768aa1bcbee97595dda/5f23c80f/video/tos/useast2a/tos-useast2a-pve-0068/8b168146120d4b9385bdeb3dd9453ff7/?a=1233&br=1724&bt=862&cr=0&cs=0&dr=0&ds=1&er=&l=20200731012805010190191047066D1B17&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajxkNzRwZHdvdTMzZDczM0ApPDg3OzQ5aWRpN2lnOGVnZmctZ2xtX2cycmZfLS1hMTZzcy8wYC5fXy0tLWFfLy80NmE6Yw%3D%3D&vl=&vr="></video>
      <VideoFooter
        channel="rav.shrestha9"
        description="Check out this video!!!"
        song="hey Ma! Look I made it"
      />
      <VideoSidebar />
    </div>
  );
}

export default Video;
