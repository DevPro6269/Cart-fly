import { useState, useEffect } from "react";

function useProductData(url) {
    let [data, setData] = useState([]);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(true);  // Track loading state

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const resData = await response.json();
                if (!resData.ok) {
                    setLoading(false)    
                    setData(resData);
                } else {
                    throw new Error("Data not found");
                }
            } catch (err) {
                setError(err);
            }
            console.log("inside a fetchdata fn");
            
        };

        console.log("inside a useEffect ");
        

        fetchData();
    }, [url]); 
   
    console.log("inside a useProduct  ");

    return {
        data: data,
        err: error,
        loading:loading,
    };
}

export default useProductData;
