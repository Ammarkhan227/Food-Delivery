import { useEffect, useState, useParams } from "react";
import { MENU_API } from "./constants";



const useMenuitems = (resId) => {
    const [resInfo, setresInfo]= useState(null);  // restaurant info will be stored in this state

   useEffect(()=>{
    fetchData();
   });

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setresInfo(json.data);   //set the restaurant information to the state
     }; 
       return resInfo  
};

export default useMenuitems;


