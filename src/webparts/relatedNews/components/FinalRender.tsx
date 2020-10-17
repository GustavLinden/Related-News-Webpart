import * as React from 'react';
import { FinalRenderProps} from './IRelatedNewsProps';

const FinalRender: React.FC <FinalRenderProps> = (props): JSX.Element => {
const NewsCategory = props.category.join();
 const res = props.pagesToLoad.filter(t => {
   return NewsCategory.includes(t.NewsCategory);
 } )
console.log(res);
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

