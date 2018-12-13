import React from 'react';
import CiphersList from './ciphersList'

const CiphersComponent = props=> {
 
        return (
            <div className ="float-left cipher-display">
            
            <div>

                {
                    props.data.map((item, index) => {
                        return (
                            <div id="element" key={index}>
                                <CiphersList cipher={item} index={index} onDelete={props.onDelete} />
                            </div>


                        )
                    })
                }
                </div>
            </div>
        )





    }





export default CiphersComponent;