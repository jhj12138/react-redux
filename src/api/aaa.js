
import axios from 'axios'
const urlParams = '/'

export const bannerImg = apiParams => { //
  return axios({
    method: 'get',
    url: urlParams + 'hone/bannerImg',
    params: apiParams,
  })
}


export const inquiry = apiParams => { //
  return axios({
    method: 'post',
    url: urlParams + 'user/intrest/edit',
    params: apiParams,
  })
}