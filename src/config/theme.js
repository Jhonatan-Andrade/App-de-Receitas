

const darkSchema ={
    color:'#fff',
    box:'fff',
    boxtitle:'#000',
    background:'#273c75',
} 
const lightSchema ={
    color:'#000',
    box:'#9f9f9f',
    boxtitle:'',
    background:'#fff',
}
export default function Theme(params) {
    if (params == 'dark') {
        return darkSchema
    }
    if (params == 'light') {
        return lightSchema
    }
}
