import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

export const FETCH_TAGS = 'FETCH_TAGS';


const ROOT_URL = 'https://api.leancloud.cn/1.1';
const LCID = 'yO8UMd8PoTeRfdea87pSAdh4-gzGzoHsz';
const LCKEY = 'yeHIfUHx0VGIguPz2yHdk4Sh';
const PageSize = 5;

export function fetchPosts(page) {
  const url = `${ROOT_URL}/classes/Posts?order=-rankTag,-createdAt&limit=${PageSize}&skip=${PageSize * page}`;
  const request = axios.get(url,{
    headers:{'X-LC-Id': LCID,
              'X-LC-Key': LCKEY
              }
  });


  return {
    type: FETCH_POSTS,
    payload: request
  };
}


export function fetchTags() {
  const request = axios.get(`${ROOT_URL}/functions/tags`,{
    headers:{'X-LC-Id': LCID,
              'X-LC-Key': LCKEY
              }
  });


  return {
    type: FETCH_TAGS,
    payload: request
  };
}




export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/classes/Posts`,props,{
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
  const request = axios.get(`${ROOT_URL}/classes/Posts/${id}`,{
    headers:{'X-LC-Id': LCID,
              'X-LC-Key': LCKEY}
  });

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/classes/Posts/${id}`,{
      headers:{'X-LC-Id': LCID,
                'X-LC-Key': LCKEY}
    });

    return {
      type: DELETE_POST,
      payload: request
    };
}


export function toggleNav() {
    return {
      type: 'TOGGLE_NAV',
      payload: 'show'
    };
}
