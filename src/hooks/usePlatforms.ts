import useData from "./useData"

//principe of hooks
// define interface of data you are fetching ,then fetch it
//call it in it's component
//then component called in app


interface Platform{
    id:number
    name:string
    slug:string
}


const usePlatforms =()=>useData<Platform>('/platforms/lists/parents')

export default usePlatforms