import request from '@/utils/request'

/**
 * 登录
 * @param params
 */
export function login (params) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { ...params }
  })
}
