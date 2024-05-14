import React from 'react'

type Props = {
    data: string[];
};

const List = ({data}: Props) => {
  return (
    <>
        <div className='container'>
            <ul className="list-group">
                {data.map((element) =>(
                <li key={element} className="list-group-item">{element}</li> 
                ))}
            </ul>
            <br />
        </div>
    </>
  )
}

export default List