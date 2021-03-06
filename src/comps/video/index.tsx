import React, { useEffect, useRef } from 'react';
import { HomeVideo } from './styles';

const handleVisibilityChange = (videoElement: React.MutableRefObject<HTMLVideoElement>) => {
  if (document.hidden) {
    videoElement.current.pause();
  } else {
    videoElement.current.play();
  }
};

export const Video = ({ url } : { url:string }) => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const boundVisCallback = handleVisibilityChange.bind(null, videoElement);
  useEffect(() => {
    document.addEventListener('visibilitychange', boundVisCallback, false);
    return function cleanup() {
      document.removeEventListener('visibilitychange', boundVisCallback);
    };
  });
  return (
    <HomeVideo autoPlay muted loop playsInline ref={videoElement}>
      <source src={url} type="video/mp4" />
    </HomeVideo>
  );
};
