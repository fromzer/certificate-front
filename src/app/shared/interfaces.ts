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

export interface AuthData {
  id: number
  token: string
}

export interface Tag {
  id: number
  name: string
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
  tags: Tag[]
}

export interface CertificateOrder {
  id: number
}

export interface Order {
  certificates: Certificate[]
}

export interface OrderPostResponse {
  id: number
  cost: number
  purchaseDate: Date
  user: UserGift
  certificates: Certificate[]
}

export interface CertificateGetResponse {
  _embedded: {
    giftCertificateList: Certificate[],
    _links: { self: { href: string } }
  };
  _links: {
    "first": {
      "href": string
    },
    "self": {
      "href": string
    },
    "next": {
      "href": string
    },
    "last": {
      "href": string
    };
    page: {
      size: number,
      totalElements: number,
      totalPages: number,
      number: number
    }
  }
}

export interface Order {
  id: number
  cost: number
  purchaseDate: Date
  user: UserGift
  certificates: Certificate[]
}

export interface OrderGetResponse {
  _embedded: {
    giftOrderList: Order[],
    _links: { self: { href: string } }
  };
  _links: {
    "first": {
      "href": string
    },
    "self": {
      "href": string
    },
    "next": {
      "href": string
    },
    "last": {
      "href": string
    };
    page: {
      size: number,
      totalElements: number,
      totalPages: number,
      number: number
    }
  }
}
