import React, { useContext } from 'react';
import { TopListI } from "../../../store/TopListStore";
import { Box } from "../../style/TrackBox";
import { observer } from "mobx-react-lite";
import TopListStore from "../../../store/TopListStore";
import { useHistory } from "react-router-dom";


const TrackBox: React.FC<{ trackData: TopListI, tabIndex: number }> = (props) => {

  const history = useHistory();
  const topListStore = useContext(TopListStore);
  const { setActiveTrack } = topListStore;

  const saveTrackAndRedirect = (track: TopListI) => {
    setActiveTrack(track);
    history.push(`/track/${track.id}`)
  };

  return (
    <Box.Container background={props.tabIndex % 2 === 0 ? true : false}
                   onClick={() => saveTrackAndRedirect(props.trackData)}>
      <Box.LeftSide>
        <Box.Lp>{props.tabIndex + 1}</Box.Lp>
        <Box.Image src={props.trackData.image[0].label} alt=""/>
      </Box.LeftSide>
      <Box.Title>{props.trackData.artist} - {props.trackData.title}</Box.Title>
    </Box.Container>
  )
};

export default observer(TrackBox);
