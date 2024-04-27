import { createClient } from '@sanity/client';
import { client } from '../sanity';
import axios from 'axios';


let sanityQuery = (query, params) => client.fetch(query, params);

export const getBlogs = () => {
    return sanityQuery(`
    *[_type == 'post']{
        ...,
        
           
    }
    `)
}
export const getBlogById = (id) => {
    console.log("selected",id)
    return sanityQuery(`
    *[_type == 'post' && _id == "${id}"]{
        ...,
        
        
           
    }
    `)
}