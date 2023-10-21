import axios from "axios";


export const fetchDataFromApi = async (url='amreshpro') => {
try {
    const { data } = await axios.get(`https://api.github.com/users/${url}`);

    console.log(data);
  
    return data; 
} catch (error) {
    console.log(error)
    return error;
}
};
