
export type LoginApi = {  // az api oldalán használt elnevezések
    username: string,
    password: string
}

export type LoginResponse = {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  token: string
}