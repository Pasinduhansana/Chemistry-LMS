import React, { useState } from "react";
import Expander from "../Components/Expander";
import Material_content from "../Components/Material_content";
import Lessons from "../Dataset/Lessons.json";
import Player from "../Components/Video_player";
import { BrowserRouter, Link } from "react-router-dom";
import Selective_card from "../Components/Selective_card";
import Lesson_card from "../Components/Lesson_card";

function Course_content() {
  const [lesson_array, setArray] = useState([]);
  const [material_array, setMaterialArray] = useState([]);
  const [videoURL, setVideoURL] = useState(
    "https://www.youtube.com/watch?v=Ml1bk9wDXVo&pp=ygUQYXRvbWljIHN0cnVjdHVyZQ%3D%3D"
  );

  return (
    <div className="lmsapp">
      <div className="rectangle"></div>

      <div className="grid1">
        <div className="titlename">
          <div className="title-header">Lectures</div>
        </div>

        <div className="Expander-class">
          <div className="Expander-class-inner-1">
            {Lessons.map((item, index) => {
              const setSublesson = () => {
                setArray(Lessons[index].content);
                setMaterialArray(Lessons[index].materials);
              };
              return (
                <>
                  <Lesson_card
                    key={index}
                    item={item}
                    index={index}
                    setSublesson={setSublesson}
                  />
                </>
              );
            })}
          </div>
          <div className="Expander-class-inner-2">
            {
              <Selective_card
                SubLessonArray={lesson_array}
                set_Video_URL={setVideoURL}
              />
            }
          </div>
        </div>
      </div>

      <div className="grid2">
        <Link
          to={{
            pathname: "/Video-resource",
            state: { materials: material_array, videoURL: videoURL },
          }}
        >
          <h1 className="video-header">Content Video Player</h1>
        </Link>

        <div className="video-player">
          <Player URL={videoURL} />
        </div>

        <div className="material-content">
          <Material_content />
        </div>
      </div>
    </div>
  );
}
export default Course_content;
