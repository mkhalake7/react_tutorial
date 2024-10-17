import RestoComponent from "./RestoComponent";
import resList from "../utils/mockData";



const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                resList.map(resturent => <RestoComponent key={resturent.data.id} resData={resturent}/> )
                }
            </div>
        </div>
    )
}

export default Body;