export interface Moment{
    id?:string,
    title:string,
    description:string,
    image:string,
    creat_at?:string,
    updated_at?:string,
    comments?:[{text: string ; username: string }]
}