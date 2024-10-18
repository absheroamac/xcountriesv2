import React, { useEffect, useState } from 'react'
import styles from './Landing.module.css'
import { Card } from './CountryCard'

export const Landing = () => {
    const API_ENDPOINT = "https://restcountries.com/v3.1/all"
    const [data,setData] = useState([]);
    const [filteredSet, setFilteredSet] = useState([])

    // Handle Search and Update Flag List
    const handleSearch = (event)=>{

        const title= event.target.value;
        filterSearch(title)

    }

    const filterSearch = (searchValue)=>{

        searchValue = searchValue.toLowerCase();
        console.log(data)
        const updatedSet = data.filter(item=>{
            const lowerCase = item.name.common.toLowerCase()
            return lowerCase.includes(searchValue)

        })
        
        setFilteredSet(updatedSet)

    }

    // Do the initial API Request and fill the Flag List
    useEffect(()=>{

        const handleAPI = async ()=>{
            try{
                const res = await fetch(API_ENDPOINT);
                if(res.status===200){
                    const Resdata = await res.json();
                    setData(Resdata)
                    setFilteredSet(Resdata)
                }
                else{
                    throw Error("API Error")
                }

            }
            catch(error){
                error.log(error.message)

            }
        }

        handleAPI()
    },[])


  return (
    <div className={styles.container}>
        <input type='text' className={styles.input}onChange={handleSearch} name='search' placeholder='search'></input> 
        <div className={styles.gridContainer}>
            {data.length>0 && filteredSet.map(item=>(<Card className="countryCard" data={item}/>))}

        </div>

    </div>
  )
}
