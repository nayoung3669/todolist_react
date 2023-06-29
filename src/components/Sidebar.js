import React from "react";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const params = useParams();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = today.getDay();

  return (
    <>
      {isNaN(params.id) && (
        <div className="sidebar">
          <div className="category">오늘 날씨</div>
          <div className="category">
            {year + "/" + month + "/" + date + " " + days[day] + "요일"}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
