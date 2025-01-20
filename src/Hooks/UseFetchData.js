import { useState, useEffect } from "react";

function useProductData(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);  // Track loading state

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const resData = await response.json();
                if (!resData.ok) {
                    console.log(data);
                    setLoading(false)
                    setData(resData);
                } else {
                    throw new Error("Data not found");
                }
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [url]); 
    // console.log("inside  fn");

    return {
        data: data,
        err: error,
        loading:loading,
    };
}

export default useProductData;
