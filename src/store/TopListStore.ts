import { observable, action } from "mobx"
import { createContext } from "react"

export interface TopListI {
}

class TopListStore {
  @observable topList: TopListI[] = [];

  @action setTopList = (results: TopListI[]) => {
    this.topList = results;
  };
}

export default createContext(new TopListStore())
