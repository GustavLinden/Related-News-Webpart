import * as React from 'react';
import { IRelatedNewsProps, IRelatedNewsState} from './IRelatedNewsProps';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import FilterLists from './FilterLists';
import { IListInfo } from '@pnp/sp/lists';


export default class RelatedNews extends React.Component<IRelatedNewsProps, IRelatedNewsState> {
  constructor(props: IRelatedNewsProps){
    super(props)
    this.state = {sitePagesGUID : ""}
  }

  componentDidMount() {
    this._getAllLists();
  }

  _getAllLists: Function = async (): Promise<void> => {
    const everyLists: IListInfo [] = await sp.web.lists.get();
    const theListIwant: IListInfo [] = everyLists.filter((eL) => {
      return eL.Title === `Site Pages` || eL.Title === `Webbplatssidor`;
    });
    const SPGUID = theListIwant.map((r) => {
      return r.Id;
    });
    this.setState({ sitePagesGUID: SPGUID.toString() })
  };

  public render(): React.ReactElement<IRelatedNewsProps> {
    return (
      <div className="container">
      <h3>Interested in similar news?</h3>
      <FilterLists spGUID={this.state.sitePagesGUID} context={this.props.context}/>
      </div>
      );
  }
}
