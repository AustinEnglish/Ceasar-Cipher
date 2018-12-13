import React from 'react';


//presentational
const CiphersList = props => {


    return (
        <div className="row todo-item" >

            <div id="cipher-element">{"Your word: "}<strong>{props.cipher.phrase}</strong>
                {" with a shift of: "} <strong>{props.cipher.offset}</strong>
                {" is encoded as: "}  <strong>{props.cipher.cipherString}</strong>
                 <button className="btn btn-outline-danger btn-sm float-right" onClick={() => props.onDelete(props.index)}>X</button>
            </div>

        </div>

    )


}

export default CiphersList;