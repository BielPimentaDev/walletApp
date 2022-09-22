export interface  AvatarProps{
    url: string
}

export interface CurrentCard {
    balance : string,
    cardType : cardType
}

export enum cardType{
    Nubank = "Nubank",
    Bradesco = "Bradesco",
    Caixa = "Caixa"
}