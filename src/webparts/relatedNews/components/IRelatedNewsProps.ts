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
    NewsCategory: Array<string>,
    EncodedAbsUrl: string,
    PromotedState: number
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
  category: string
}
export interface FinalRenderProps{
  category: string;
  pagesToLoad: Array<ILista>;

}
