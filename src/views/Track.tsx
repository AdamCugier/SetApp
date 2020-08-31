import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router";
import TopListStore, { TopListI } from "../store/TopListStore";
import { observer } from "mobx-react-lite";
import { Link, useHistory } from "react-router-dom";
import { Tr } from "./style/Track";

const Track: React.FC = () => {
  let { trackId } = useParams();
  const history = useHistory();
  const topListStore = useContext(TopListStore);
  const { topList, activeTrack, setActiveTrack } = topListStore;


  useEffect(() => {
    if (topList.length === 0) {
      history.push('/top-list')
    } else {
      if (trackId !== activeTrack.id) {
        const newActive = topList.filter((track: TopListI) => track.id === trackId);
        if (newActive.length === 1) setActiveTrack(newActive[0])
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tr.Container>
      <Tr.Img src={activeTrack.image[activeTrack.image.length - 1].label} alt=""/>
      <Tr.DetailsContainer>
        <Tr.Title>{activeTrack.title}</Tr.Title>
        <Tr.Paragraph><Tr.Span>Price:</Tr.Span> {activeTrack.price}</Tr.Paragraph>
        <Tr.Paragraph><Tr.Span>Category:</Tr.Span> {activeTrack.category}</Tr.Paragraph>
        <Tr.Paragraph><Tr.Span>Release Date:</Tr.Span> {activeTrack.releaseDate}</Tr.Paragraph>
      </Tr.DetailsContainer>
      <Tr.ButtonsContainer>
        <Link to={'/top-list'}>Back</Link>
        <a href={activeTrack.link}>Check Album</a>
      </Tr.ButtonsContainer>
    </Tr.Container>
  )
};

export default observer(Track)
