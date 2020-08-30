import { observable, action } from "mobx"
import { createContext } from "react"

export interface TopListI {
  name: string,
  image: [{
    label: string,
    attributes: {
      height: string
    }
  }],
  price: string,
  rights: string,
  title: string,
  link: string,
  id: string,
  artist: string,
  category: string,
  releaseDate: string
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
