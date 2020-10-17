import * as React from 'react';
import { FinalRenderProps} from './IRelatedNewsProps';

const FinalRender: React.FC <FinalRenderProps> = (props): JSX.Element => {
const NewsCategory: string = props.category.join();
 const pagesToInclude = props.pagesToLoad.filter(t => {
   return NewsCategory.includes(t.NewsCategory);
 } )
 const res = pagesToInclude.filter((pti) => {
  return pti.PromotedState === 2;
 });

  const itemsToRender = () => res.reverse().slice(0,6).map((ts) => {
   return (
    <div><a href={ts.EncodedAbsUrl} data-interception="off" target="_blank" rel="noopener noreferrer">{ts.Title}</a></div>
   )
 })

return (
<div>{itemsToRender()}</div>
);
}

export default FinalRender;

