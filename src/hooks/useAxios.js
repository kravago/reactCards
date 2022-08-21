import axios from 'axios';
import { useState } from 'react';
import uuid from "uuid";


/* hook to handle ajax requests */
function useAxios(url) {
    const [stateArr, setStateArr] = useState([]);
    const targetUrl = url;

    async function addToArr() {
        try {
            const res = await axios.get(targetUrl);
            setStateArr([...stateArr, {...res.data, id: uuid() }]);
        } catch(e) {
            alert(e);
        }
    }

    return [stateArr, addToArr];
}

export default useAxios;