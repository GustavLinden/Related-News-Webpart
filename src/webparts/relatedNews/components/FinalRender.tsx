
import * as React from 'react';
import { FinalRenderProps} from './IRelatedNewsProps';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

const iconClass = mergeStyles({
  fontSize: 10,
  height: 10,
  width: 10,
  margin: '0 10px',
});

const FinalRender: React.FC <FinalRenderProps> = (props): JSX.Element => {
const res = props.pagesToLoad.filter((pti) => {
  return pti.PromotedState === 2 && pti.NewsCategory.find(r => props.category.includes(r))
 });

const lengthOfRes = res.length;
if(lengthOfRes === 0) {
  return <div>Inga relaterade nyheter hittade...</div>
}
//Iconname i FontIcon nedan är det du ändrar för att ändra ikonen. Css värden för ikonen fylls i i iconClass Ovan
//https://developer.microsoft.com/en-us/fluentui#/styles/web/icons <-- Här finns tillgängliga ikoner
const itemsToRender = () => res.reverse().slice(0,5).map((ts) => {
   return (
    <div><FontIcon iconName="CaretRightSolid8" className={iconClass} /><a href={ts.EncodedAbsUrl} data-interception="off" target="_blank" rel="noopener noreferrer">{ts.Title}</a></div>
   )
 })

return (
<div>{itemsToRender()}</div>
);
}

export default FinalRender;
