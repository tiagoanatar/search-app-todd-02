import { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'

export const PartsPagination = ({ search, data, pageMultiplier, changePage } )=> {

  const [pos, setPos] = useState({prev: 0, next: 1000})

  const changePagination = (type) => {
    let prev = 0
    let next = 0
    if(type === 'next'){
      prev = pos.prev + 1000
      next = pos.next + 1000
    } 
    if(type === 'prev'){
      prev = pos.prev - 1000
      next = pos.next - 1000
    }
    setPos({prev: prev, next: next})
  }

  return (
    <Pagination>
      {(search === undefined || search === '') && pos.prev > 0 ? <Pagination.Ellipsis onClick={() => changePagination('prev')} /> : null}

      {search === undefined || search === '' ? data.map((item, index) => {
        if(index % pageMultiplier === 0 && index > pos.prev && index < pos.next){
          return (<Pagination.Item key={index} onClick={() => changePage(index)}>{index/pageMultiplier}</Pagination.Item>)
        }
      }) : null}
      
      {(search === undefined || search === '') && pos.next < data.length ? <Pagination.Ellipsis onClick={() => changePagination('next')} /> : null}
    </Pagination>
  );
}