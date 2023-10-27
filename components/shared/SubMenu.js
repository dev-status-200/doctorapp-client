import React,{memo} from "react";

const SubMenu = ({ menu, step, setStep }) => {
  return (
    <div className="sub-menu">
      {menu.map((item, index) => {
        return (
          <a onClick={()=>{setStep(item.id)}} className={step == item.id ? "clicked" : ""}>
           {item.text}
          </a>
        );
      })}
      <div className="active-indicator"></div>
    </div>
  );
};

export default  memo(SubMenu);
