import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Navbar from "../components/shared/Navbar";

export default function Homepage(){
    return(
        <div className="container mx-auto">
            <Navbar/>
            <Banner/>
            <Categories/>
        </div>
    );
}