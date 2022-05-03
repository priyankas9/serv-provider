import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
return (
    <div className="featured">
        <div className="top">
        <h3 className="title" fontSize="small">
            Total Revenue
            
        </h3>
        <MoreVertIcon fontSize="small"/>


        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$2.34</p>
            <p className="desc">Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. </p>
              <div className="summary">
                   
              </div>
        </div>
    </div>
);
}
export default Featured;