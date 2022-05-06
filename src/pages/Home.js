import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="Cell Com casa de celulares" />
        </div>
    );
}

export default Home;
