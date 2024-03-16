import React from "react";
import Github from '../../assets/Github.png';
import CustomButton from './button.jsx'; 
import Linkiedin from '../../assets/Linkiedin.png'

const App = () => {
    return (
        <div>
            <CustomButton imageUrl={Github} />
            <CustomButton imageUrl={Linkiedin} />
        </div>
    );
}

export default App;
