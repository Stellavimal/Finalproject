import { useState, useEffect } from "react";
import axios from "axios";
const Result = () => {
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/addelection/');
                setValue(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();}, []);
    return ( <></> );
}
 
export default Result;