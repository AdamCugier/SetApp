import React, { useContext } from 'react';
import { Loader } from "./components/Loader/Loader";
import TopListStore from "../store/TopListStore";
import { observer } from "mobx-react-lite";


const TopList: React.FC = () => {

  const topListStore = useContext(TopListStore);
  const { dataLoaded } = topListStore;

  return (
    <>
      {dataLoaded ? <div>Loaded</div> :
        <Loader/>
      }
    </>
  )
};
export default observer(TopList)
