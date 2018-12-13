import React from 'react';

const DeciphersComponent = props => {

    return (
        <div className="cipher-display">
                {
                    props.data.map((item, index) => {
                        return (

                            <div key={index}>
                                <div className="row">
                                    <div className="element col-lg">{"Item with key "} <strong>{(index-26)}</strong>
                                        {" is encoded as: "}  <strong>{item}</strong>
                                    </div>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
    )





}





export default DeciphersComponent;