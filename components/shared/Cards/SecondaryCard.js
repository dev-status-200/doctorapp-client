import React,{memo} from "react";

const Card = ({ title, children, size }) => {
  return (
    <div className="responsive-card">
      <div className={size == "lg" ? "card-header" : "card-header-secondary"}>
        {title}
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

const ScrollerCard = ({ title, children, size }) => {
  return (
    <div className={size==='lg'?"scroller-card-sm":"scroller-card"}>
      <div className="card-header-secondary">
        {title}
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

const MemoizedCard = React.memo(Card);
const MemoizedScrollerCard = React.memo(ScrollerCard);

export {
  MemoizedCard as Card,
  MemoizedScrollerCard as ScrollerCard,
};

