import React, { Component } from 'react';

class CipherForm extends Component {
    state = {

        cipherStr: '',
        offset: ''

    }


    saveCipher = (event) => {

        this.props.onSubmitCipher(event, this.state);

        this.setState({
            cipherStr: '',
            offset: ''

        });

    }



    render() {

        return (

                <div className='float-left Submit-form'>
                    <form>
                        <div>
                            <label className="input-labels"><b>English Word/Phrase</b></label>
                            <input required type='text'
                                className="form-control input-fields"
                                placeholder="cipher text"
                                value={this.state.cipherStr}
                                onChange={(e) => this.setState({ cipherStr: e.target.value })} />
                        </div>
                        <div>
                            <label className="input-labels"><b>Cipher Offset</b></label>
                            <input required type='number'
                                className="form-control input-fields"
                                placeholder="offset number"
                                value={this.state.offset}
                                onChange={(e) => this.setState({ offset: e.target.value })} />
                        </div>
                        <div>
                            <button type='submit' className='btn btn-primary add-button reg-buttons sub-button' onClick={this.saveCipher}> Cipher it! </button>
                        </div>
                    </form>
                </div>
           

        )





    }


}


export default CipherForm;