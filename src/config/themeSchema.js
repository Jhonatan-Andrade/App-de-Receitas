

const darkSchema ={
    color:'#fff',
    box:'#fff',
    boxtitle:'#000',
    background:'#192a56',
    input:'#000',
    seta:'#000',
    statusbartitle:'light-content'
} 
const lightSchema ={
    color:'#000',
    box:'#192a56',
    boxtitle:'#fff',
    background:'#d9f9f9',
    input:'#fff',
    seta:'#fff',
    statusbartitle:'dark-content'
}
function Theme(params) {
    if (params == 'dark') {
        return darkSchema
    }
    if (params == 'light') {
        return lightSchema
    }
}
export default Theme('dark')