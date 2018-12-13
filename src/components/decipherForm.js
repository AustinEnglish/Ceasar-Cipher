import React, { Component } from 'react';

class DecipherForm extends Component {
    state = {

        cipherStr: ''

    }


    saveCipher = (event) => {

        this.props.onSubmitCipher(event, this.state.cipherStr);

        this.setState({
            cipherStr: '',

        });

    }



    render() {

        return (

                <div className='float-left Submit-form'>
                    <form>
                        <div>
                            <label className="input-labels"><b>Caesar Cipher Word/Phrase</b></label>
                            <input type='text'
                                className="form-control input-fields"
                                placeholder="cipher"
                                value={this.state.cipherStr}
                                onChange={(e) => this.setState({ cipherStr: e.target.value })} />
                        </div>
                        
                        <button type='submit' className='btn btn-primary add-button reg-buttons sub-button' onClick={this.saveCipher}> Decipher it! </button>
                        
                    </form>
                </div>

        )





    }


}


export default DecipherForm;