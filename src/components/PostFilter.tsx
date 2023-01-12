import React, {useState} from 'react';
import SelectCustom from "./UI/select/SelectCustom";
import FormInputText from "./UI/inputs/FormInputText";

// const PostItem = (props: {idx: number, post: { id?: number, title: string, content: any } }) => {
const PostFilter = ({filter, onChange, ...props}: any) => {
  // console.log("props PostItem: ", props);

  const [sortOptions, setSortOption] = useState([
    { label: "By Title", value: 'title' },
    { label: "By Content", value: 'content' },
  ])

  return (
    <div style={{margin: '10px'}}>
      <SelectCustom
        value={filter.sortType}
        onChange={event => onChange({...filter, sortType: event})}
        options={sortOptions}
        defaultValue={ '--Sort By--' } />

      <FormInputText type="text" placeholder="keywords..."
                     value={filter.filterQuery}
                     onChange={(event: any) =>  onChange({...filter, filterQuery: event.target.value}) }/>
    </div>
  );
}

export default PostFilter;