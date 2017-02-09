import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';



const ROOT_URL = 'https://api.leancloud.cn/1.1/classes';
const LCID = 'WW3muRAiRPxugfRuvxKgwKxM-gzGzoHsz';
const LCKEY = 'fI4B7VqC9h9q0Ly4IdERUnet';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/blog?order=-createdAt`,{
    headers:{'X-LC-Id': LCID,
              'X-LC-Key': LCKEY
              }
  });

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/blog`,props,{
    headers:{'X-LC-Id': LCID,
              'X-LC-Key': LCKEY
              }
  });

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/blog/${id}`,{
    headers:{'X-LC-Id': LCID,
              'X-LC-Key': LCKEY}
  });

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/blog/${id}`,{
      headers:{'X-LC-Id': LCID,
                'X-LC-Key': LCKEY}
    });

    return {
      type: DELETE_POST,
      payload: request
    };
}
