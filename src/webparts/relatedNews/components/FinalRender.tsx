import * as React from 'react';
import { FinalRenderProps} from './IRelatedNewsProps';

const FinalRender: React.FC <FinalRenderProps> = (props): JSX.Element => {
const res = props.pagesToLoad.filter((pti) => {
  return pti.PromotedState === 2;
 });
const cat = props.category.toString();
const pagesToInclude = res.filter((e) => {
  if (e.NewsCategory.includes(cat) || cat.includes(e.NewsCategory)) {
  return e;
  }
  });
  const itemsToRender = () => pagesToInclude.reverse().slice(0,6).map((ts) => {
   return (
    <div><a href={ts.EncodedAbsUrl} data-interception="off" target="_blank" rel="noopener noreferrer">{ts.Title}</a></div>
   )
 })

return (
<div>{itemsToRender()}</div>
);
}

export default FinalRender;
//Kolla över mtachningar vad som är bäst. string mot string eller array mot array;
