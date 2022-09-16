import React from "react";
import MySelect from "./UI/select/MySelect";
import Myinput from "./UI/input/Myinput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <Myinput 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="пошук"/>
        <MySelect
            value={filter.sort}
            onChange={seletedSort => setFilter({...filter, sort: seletedSort})}
            defaultValue="сортування"
            options={[
              {value: 'title', name: 'по назві'},
              {value: 'body', name: 'по опису'},
            ]}
        />
      </div>
    );
};

export default PostFilter;