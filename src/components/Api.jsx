import React, { useEffect, useState } from 'react'

function Api() {

    let [data, setdata] = useState([])
    let [filterapidata,setfilterapidata]=useState([])


    let apidata = async () => {
        let a = await fetch("https://fakestoreapi.com/products")
        let b = await a.json()
        setdata(b)
        setfilterapidata(b)
    }



    useEffect(() => {
        apidata()
    }, [])


    // filterapi ---------------
    let filterapi=(item)=>{
      let filtereddata= data.filter(data=> data.category==item)
      setfilterapidata(filtereddata)
    }

    return (
        <div>
            <h1>api component</h1>
            <button onClick={()=>filterapi("men's clothing")}>men's clothing</button>
            <button onClick={()=>filterapi("jewelery")}>jewelery</button>
            <button onClick={()=>filterapi("electronics")}>electronics</button>
            <button onClick={()=>filterapi("women's clothing")}>women's clothing</button>


            {filterapidata.map((item)=>{
                return(
                    <>
                    <img src={item.image}/>
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                    <p>{item.category}</p>
                    </>
                )
            })}

            {/* introduction : react js 
            component : function 
            routing 
            props 
            maping /listing 
            hooks 
            usestate 
            usenavigate 
            location 
            effect  => api , filter
            context 
            params  */}





        </div>
    )
}

export default Api
