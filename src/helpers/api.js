//import axios library
import axios from "axios";

// define backend API endpoint (URL)
// const backendUrl = "http://localhost:3000/api/vocabs/"
const backendUrl = "https://be-vocab.onrender.com/vocabs/"

// declare function to call API
export const viewAllVocabs = async()=>{
    try{
        const response = await axios.get(backendUrl);
        return response.data;
    } catch(err){
        console.error(err);
        return null;
    }
}

export const getAllVocabById = async(id)=>{
    try{
        const response = await axios.get(backendUrl + id);
        return response.data;
    } catch(err){
        console.error(err);
        return null;
    }
}

export const createNewVocab = async(payload)=>{
    try{
        const response = await axios.post(backendUrl,payload);
        return response.data;
    } catch(err){
        console.error(err);
        return null;
    }
}

export const deleteAllVocab = async()=>{
    try{
        const response = await axios.delete(backendUrl);
        return response.data;
    } catch(err){
        console.error(err);
        return null;
    }
}

export const updateVocab = async(id, word)=>{
    try{
        const response = await axios.put(backendUrl + id, word);
        return response.data;
    } catch(err){
        console.error(err);
        return null;
    }
}

export const deleteVocabById = async(id)=>{
    try{
        const response = await axios.delete(backendUrl + id);
        return response.data;
    } catch(err){
        console.error(err);
        return null;
    }
}


export const searchVocabByName = async(keyword)=>{
    try{
        const response = await axios.get(backendUrl + keyword);
        return response.data;
    } catch(err){
        console.error(err);
        return null;
    }
}

export const sortAsc = async()=>{
    try{
        const response = await axios.get(backendUrl);
        return response.data;
    } catch(err){
        console.error(err);
        return null;
    }
}

export const sortDesc = async()=>{
    try{
        const response = await axios.get(backendUrl);
        return response.data;
    } catch(err){
        console.error(err);
        return null;
    }
}