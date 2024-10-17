import { CDN_URL } from "../utils/constants";
const RestoComponent = (props) =>{
    const { resData } = props
    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
        cloudinaryImageId
    } = resData?.data;
    
    return (
        <div className="res-cart">
            <img className="rest-logo" alt="rest-logo" 
            src={ CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{avgRating} Stars</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.data.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestoComponent;