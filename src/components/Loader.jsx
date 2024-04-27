import React from 'react';

const Loader = () => {
    return (
        <div className="bg-black w-full flex-1" id="loader">
            <div className="justify-center items-center flex-1 text-center">
                <div class="loader"></div>
                <p className="text-white text-center">Accessing Viatucare...</p>
            </div>



        </div>
    );
}

export default Loader;
