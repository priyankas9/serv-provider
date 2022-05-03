import "./feedback.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Fdatatable from "../../components/fdatatable/Fdatatable";

const Feedback = () => {
return (
    <div className="feedback">
        <Sidebar/>
        <div className="feedbackContainer">
            <Navbar/>
           <Fdatatable/>
        </div>
    </div>
)

}
export default Feedback;