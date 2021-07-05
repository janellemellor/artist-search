import React from 'react';

const withList = (ListItemComponent, propName = 'list') => {
  function CreateListComponent(props) {
    const listItems = props[propName].map(item => (
      <li key={item.id}>
        <ListItemComponent {...item} />
      </li>    
    ));

    return (
      <ul>
        {listItems}    
      </ul>    
    );
  }
  
  CreateListComponent.displayName = `WithList(${ListItemComponent.name})`;

  return CreateListComponent;
};

export default withList;

