import React, { useState} from 'react';
import { Photos } from "./import";
import "../css/Library.css";

const Library = () => {

    const [displayNumber, setDisplayNumber] = useState<null | number>(null);

    const display = (value: number) => {
        return ()=> {
            setDisplayNumber(value);
        }
    }

    const closeButton = () => {
        setDisplayNumber(null);
    }


  return (
        <div className='library_wrapper'>
            <h2 className="subtitle italic">-Library-</h2>
            <div className="grid_wrapper">
                {Photos.map((photo, index) => (
                    <div className="photo" key={index}>
                        <img src={photo} alt="" onClick={display(index)}/>
                    </div>
                ))}
                {displayNumber !== null && (
                    <>
                        <div className="extendDisplay">
                            <button className='close bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={closeButton}>close</button>
                            <img className="extend" src={Photos[displayNumber]} alt="" />
                        </div>
                        <div className="overlay"></div>
                    </>
                )}
            </div>
            {/* <p className='guide'>クリックで拡大できます</p> */}
        </div>
  )
}

export default Library;