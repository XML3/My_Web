import { useState, forwardRef, useEffect } from "react";
import MultimediaCSS from "../components/Multimedia.module.css";

export const Multimedia = forwardRef((props, ref) => {
  const [videoStates, setVideoStates] = useState({
    video1: false,
    video2: false,
    video3: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleVideoPlay = (videoId) => {
    setVideoStates((prevState) => ({
      ...prevState,
      [videoId]: !prevState[videoId],
    }));
  };

  const handleOpenModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const mainHeader = "Hobbies";
  const insideTitle = "Creative Coding & Media";
  const infoSub =
    "Original music production, video animations created with p5.js, and video editing with DaVinci Resolve. Combining code, creativity, and powerful tools to experiment with multimedia content.";

  //videos
  const videoLeft = "/videos/tension_release_square_XM.mp4";
  const videoCentre = "/videos/forward33.mp4";
  const videoRight = "/videos/PrevZur2.mp4";
  const closeIcon = "/icons/weui--close2-outlined.svg";

  return (
    <>
      <div ref={ref} className={MultimediaCSS.MainContainer}>
        <div className={MultimediaCSS.MainHeader}>
          <h1>{mainHeader}</h1>
        </div>
        <div className={MultimediaCSS.SecondContainer}>
          <div className={MultimediaCSS.ItemsContainer}>
            <h2>{insideTitle}</h2>
            <p>{infoSub}</p>
            <div className={MultimediaCSS.Videos}>
              <video
                src={videoLeft}
                controls
                controlsList="nodownload nofullscreen"
                onPlay={() => handleVideoPlay("video1")}
                onPause={() => handleVideoPlay("video1")}
                onClick={() => handleOpenModal(videoLeft)}
              />
            </div>
            <div className={MultimediaCSS.Videos}>
              <video
                src={videoCentre}
                controls
                controlsList="nodownload nofullscreen"
                onPlay={() => handleVideoPlay("video2")}
                onPause={() => handleVideoPlay("video2")}
                onClick={() => handleOpenModal(videoCentre)}
              />
            </div>{" "}
            <div className={MultimediaCSS.Videos}>
              <video
                src={videoRight}
                controls
                controlsList="nodownload nofullscreen"
                onPlay={() => handleVideoPlay("video3")}
                onPause={() => handleVideoPlay("video3")}
                onClick={() => handleOpenModal(videoRight)}
              />
            </div>
          </div>
        </div>

        {/* Modal video enlargement */}
        {isModalOpen && (
          <div className={MultimediaCSS.VideoModal}>
            <div className={MultimediaCSS.ModalContent}>
              <video
                src={currentVideo}
                controls
                controlsList="nodownload"
                className={
                  isFullScreen
                    ? MultimediaCSS.FullScreenVideo
                    : MultimediaCSS.EnlargedVideo
                }
              />

              <button
                onClick={handleCloseModal}
                className={MultimediaCSS.CloseButton}
              >
                <img src={closeIcon} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
});
Multimedia.displayName = "Multimedia";
