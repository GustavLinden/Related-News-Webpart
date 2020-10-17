import * as React from 'react';
import { IAllListsProp,ILinksToShowState} from './IRelatedNewsProps';
import FinalRender from './FinalRender';

export default class LinksToShow extends React.Component<IAllListsProp, ILinksToShowState> {
  constructor(props: IAllListsProp){
    super(props)
    this.state = {
      pagesToLoad: [], thisPage: [], category: []
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.allLists !== this.props.allLists) {
      this._Sorting();
    }
  }

  _Sorting = (): void => {
    const Id: number = this.props.context.pageContext.listItem.id;
    const pageNotToLink = this.props.allLists.filter((list) => {
      return list.Id === Id;
    });
    const NewsCategory = pageNotToLink.map((r => {
      return r.NewsCategory;
    }));
    this.setState({ category:NewsCategory });
    this.setState({ thisPage: pageNotToLink });
    const allToLink = this.props.allLists.filter((list) => {
      return list.Id !== Id ;
    });
    this.setState({ pagesToLoad:allToLink });
  }

  render(): React.ReactElement<IAllListsProp> {

  return <div className="linksToShow"><FinalRender category={this.state.category} pagesToLoad={this.state.pagesToLoad}/></div>
  }
}





