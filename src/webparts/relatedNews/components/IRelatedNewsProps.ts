import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IRelatedNewsProps {
  description: string;
  context: WebPartContext;
}

export interface IAllListsProp {
  allLists: ILista [],
  context: WebPartContext,
}

export interface ILista {
    Title: string,
    Id: number,
    NewsCategory: string,
    EncodedAbsUrl: string,
}
export interface ISPListGUID {
  spGUID: string;
  context: WebPartContext;
  }
export interface ISPListState {
  items: Array<ILista>
}
export interface IRelatedNewsState {
  sitePagesGUID: string;
}
export interface ILinksToShowState {
  pagesToLoad: ILista [],
  thisPage: ILista [],
  category: Array<string>
}
export interface FinalRenderProps{
  category: Array<string>;
  pagesToLoad: Array<ILista>;

}
