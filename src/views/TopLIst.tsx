import React, { useContext, useEffect, useState } from 'react';
import { Loader } from "./components/Loader/Loader";
import TopListStore, { TopListI } from "../store/TopListStore";
import { observer } from "mobx-react-lite";
import iTunesService from "../services/iTunesService";
import TrackBox from "./components/TrackBox/TrackBox";
import { List } from "./style/TopList";

const TopList: React.FC = () => {

  const topListStore = useContext(TopListStore);
  const { dataLoaded, setDataLoaded, topList, setTopList } = topListStore;
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<TopListI[]>([]);

  useEffect(() => {
    if (topList.length === 0) {
      setDataLoaded(false);
      iTunesService.getTracks().then(r => {
        const filteredData = r.feed.entry.map((track: any) => ({
          name: track['im:name'].label && track['im:name'].label,
          image: track['im:image'] && track['im:image'],
          price: track['im:price'].label && track['im:price'].label,
          rights: track.rights.label && track.rights.label,
          title: track.title.label && track.title.label,
          link: track.link.attributes.href && track.link.attributes.href,
          id: track.id.attributes['im:id'] && track.id.attributes['im:id'],
          artist: track['im:artist'].label && track['im:artist'].label,
          category: track.category.attributes.term && track.category.attributes.term,
          releaseDate: track['im:releaseDate'].attributes.label && track['im:releaseDate'].attributes.label
        }));
        setTopList(filteredData);
        setDataLoaded(true);
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(topList.length > 0 && dataLoaded) {
      const results = topList.filter(album => album.title.toLowerCase().includes(searchValue.toLowerCase()));
      if (results.length > 0) setSearchResults(results);
      else alert('Not found Albums');
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);


  let timer: any = null;
  const debounceSearch = (value: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSearchValue(value);
    }, 500)
  };

  return (
    <List.Container>
      {(dataLoaded && topList.length > 0) && <List.Title>TOP 100 Albums</List.Title>}
      {(dataLoaded && topList.length > 0) &&
      <List.Input placeholder={'Find album...'} onChange={(e) => debounceSearch(e.target.value)}></List.Input>}
      {dataLoaded && topList.length > 0 && searchResults.length === 0 ?
        topList.map((track, index: number) => <TrackBox trackData={track} tabIndex={index} key={track.id}/>)
        :
        dataLoaded && topList.length > 0 && searchResults.length > 0 ?
          searchResults.map((track, index: number) => <TrackBox trackData={track} tabIndex={index} key={track.id}/>)
          :
          <Loader/>
      }
    </List.Container>
  )
};
export default observer(TopList)
