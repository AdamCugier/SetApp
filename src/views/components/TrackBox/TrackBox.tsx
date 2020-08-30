import React from 'react';
import { TopListI } from "../../../store/TopListStore";
import { Box } from "../../style/TrackBox";


export const TrackBox: React.FC<{ trackData: TopListI, tabIndex: number }> = (props) => {
  console.log(props.trackData)
  return (
    <Box.Container background={props.tabIndex % 2 === 0 ? true : false}>
      <Box.LeftSide>
        <Box.Lp>{props.tabIndex}</Box.Lp>
        <Box.Image src={props.trackData.image[0].label} alt=""/>
      </Box.LeftSide>
      <Box.Title>{props.trackData.artist} - {props.trackData.title}</Box.Title>
    </Box.Container>
  )
};
