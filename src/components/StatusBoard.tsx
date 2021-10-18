import React, { useSelector, shallowEqual } from "react-redux";
import { RootState } from "../redux/configureStore";
import "../styles/StatusBoard.css";

const StatusBoard = () => {
  const { maxGaepo, maxSeocho } = useSelector(
    (state: RootState) => ({
      maxGaepo: state.config.gaepo,
      maxSeocho: state.config.seocho,
    }),
    shallowEqual,
  );

  const { gaepo, seocho } = useSelector((state: RootState) => ({
    gaepo: state.status.gaepo,
    seocho: state.status.seocho,
  }));

  return (
    <div id='status-board-wrapper'>
      <h3>개포</h3>
      <h3>
        {gaepo} / {maxGaepo}
      </h3>
      <h3>서초</h3>
      <h3>
        {seocho} / {maxSeocho}
      </h3>
    </div>
  );
};

export default StatusBoard;