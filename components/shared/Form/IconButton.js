import React,{memo} from "react";

const IconButton = ({ icon, title, onClick}) => {
  return (
    <div className="icon-btn" onClick={onClick} style={{cursor:'pointer'}}>
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default memo(IconButton);
