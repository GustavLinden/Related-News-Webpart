import * as React from 'react';
import LinksToShow from './LinksToShow';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { ISPListGUID, ISPListState} from './IRelatedNewsProps';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();
export default class FilterLists extends React.Component<ISPListGUID, ISPListState> {
  constructor(props: ISPListGUID) {
    super(props)
    this.state = {items : []}
  }
  componentDidUpdate(prevProps) {
    if (prevProps.spGUID !== this.props.spGUID) {
      this._getListsFromSitePages();
    }
  }
  _getListsFromSitePages = async (): Promise<void> => {
       await sp.web.lists
      .getById(`${this.props.spGUID}`)
      .items.select("Title, EncodedAbsUrl, Id, NewsCategory, PromotedState")
      .get()
      .then((responses) => {
        this.setState({ items: responses });

      });
  };

 public render(): React.ReactElement <ISPListGUID> {
   return (
     <div className="filterList">
    <LinksToShow  allLists={this.state.items} context={this.props.context} />
    </div>
   );
}}
