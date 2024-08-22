import React from "react";
import Player from "../Components/Fullscreen_video_player";
import Data from "../Dataset/Sampletext2.json";
import Video_info from "../Components/Video_info";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Lesson_material_card from "../Components/Lesson_material_card";
import { useLocation } from "react-router-dom";

function Video_page() {
  const location = useLocation();
  const { materials, videoURL } = location.state || {
    materials: [],
    videoURL: "",
  };

  //Material Download function
  const downloadAllResources = async () => {
    const zip = new JSZip();

    for (const item of Data) {
      try {
        console.log(`Fetching ${item.link}`);
        const response = await fetch(item.link);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const blob = await response.blob();
        const fileName = item.name || "unknown_file";
        zip.file(fileName, blob);

        console.log(`Added ${fileName} to the zip`);
      } catch (error) {
        console.error(`Failed to fetch ${item.link}:`, error.message);
      }
    }

    try {
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "resources.zip");
      console.log("ZIP file created and downloaded");
    } catch (error) {
      console.error("Failed to generate or download ZIP file:", error.message);
    }
  };

  console.log(materials);
  console.log(videoURL);

  return (
    <div className="video_page">
      <div className="fullscreen-grid1">
        <h1 className="fullscreen-header">Fullscreen - Video Player</h1>

        <div className="fullscreen-grid1-light-box">
          <div className="fullscreen-video-player">
            <Player URL={videoURL} />
          </div>
          <Video_info />
        </div>
      </div>

      <div className="fullscreen-grid2">
        <div className="Vidoe-material-content">
          <h1>Lecture Materials</h1>
          {Data.map((item, index) => {
            return (
              <>
                <Lesson_material_card key={index} item={item} />
              </>
            );
          })}
          <button className="download-btn" onClick={downloadAllResources}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
export default Video_page;
