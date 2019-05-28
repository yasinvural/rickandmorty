export function get(url){
    return fetch(url).then((result)=>{
        return result.json()
    })
}