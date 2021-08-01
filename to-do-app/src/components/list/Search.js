import React, { useState } from 'react';

const Search = ({tasks, setTasks, searchTask, setSearchTask}) => {
    
    const [searchinput, setSearchInput] = useState("");

    const searchInput = (e) =>{
        setSearchInput(e.target.value);
            };

            const searchButton = () =>{
                setTasks(searchTask);
                
                setTasks(tasks.filter((el) => el.name === searchinput));
            };
   
    return(
        <div style={{marginTop:"3%", height:"45%", display:"flex", flexWrap:"nowrap", marginRight:"2%"}}>
            <input placeholder="Search..." onChange={(e) => searchInput(e)} style={{width:"70%", height:"50%"}}></input>
            <button onClick={() => searchButton()} tasks={tasks} style={{width:"15%", height:"70%"}}>+<i className="fa fa-search"></i></button>
        </div>
    );
};

export default Search;