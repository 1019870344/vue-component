import https from '../utils/http'

export function login (params) {
  return https({
    url: '/api/auth/jwt/token',
    method: 'post',
    data: params
  })
}

export function logout (token) {
  return https({
    url: '/api/auth/jwt/invalid',
    method: 'get',
    params: { token }
  });
}