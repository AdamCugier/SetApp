import { observable, action } from "mobx"
import { createContext } from "react"

export interface TopListI {
}

class TopListStore {
  @observable topList: TopListI[] = [];
  @observable dataLoaded: Boolean = false;

  @action setTopList = (results: TopListI[]) => {
    this.topList = results;
  };
  @action setDataLoaded = (status: Boolean) => {
    this.dataLoaded = true;
  };
}

export default createContext(new TopListStore())
