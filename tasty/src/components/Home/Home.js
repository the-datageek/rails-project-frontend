import React, { useState } from "react";
import Mealitem from "./MealItem";
import './Home.css'

const Meal = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key=="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
        }
    }
    return (
        <>
            <div className="home-main">
                <div className="home-wrappper">
                <div className="home-heading">
                    <h1>Welcome, what would you like to cook?</h1>
                    {/* <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4> */}
                </div>
                <div className="searchBox">
            
                    <input 
                        type="search" 
                        className="search-bar" 
                        onChange={(e)=>setSearch(e.target.value)} 
                        value={search} onKeyPress={searchMeal}
                        placeholder="Search for recipe here..."
                        />
                    {/* <AiOutlineSearch/> */}
                        
                </div>
                </div>
                <div className="home-cards">
                   {   
                  
                    (Mymeal==null)? <p className="notSearch">Not found</p> : 
                         Mymeal.map((res)=>{
                             return(
                            <Mealitem data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>
            </div>
        </>
    )
}
export default Meal;