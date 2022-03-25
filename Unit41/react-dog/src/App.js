import './App.css';
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import Dogs from './Dogs';
import { BrowserRouter} from "react-router-dom";
import Routes from './Routes';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Dogs dogs={dogs}></Dogs>        
                <Routes dogs={dogs}></Routes>
            </BrowserRouter>
        </div>
    );
}

export const dogs = [
    {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
        ]
    },
    {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
        ]
    },
    {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
        ]
    },
    {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
            "Tubby is really stupid.",
            "Tubby does not like walks.",
            "Angelina used to hate Tubby, but claims not to anymore."
        ]
    }
]

App.defaultProps = { dogs };
export default App;
