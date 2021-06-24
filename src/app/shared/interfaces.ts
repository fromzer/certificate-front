export interface LoginUser {
  login: string
  password: string
}

export interface RegisteredUser {
  login: string
  firstName: string
  lastName: string
  password: string
  repeatPassword: string
}

export interface UserGift {
  id: number
  login: string
  firstName: string
  lastName: string
}

export interface Tag {
  id: number
  name: string
}
export interface Certificate {
  id: number
  name: string
  description: string
  price: number
  duration: number
  createDate: Date
  lastUpdateDate?: Date
}
