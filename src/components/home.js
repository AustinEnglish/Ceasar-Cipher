import React, { Component } from 'react';

//main page, chooses what you want to do
class Home extends Component {
    state = {

    }


    chooseCipher = () => {
        this.props.choosePath("cipher")

    }

    chooseDecipher = () => {
        this.props.choosePath("decipher")

    }

    render() {
        return (
            <div>
                <div id='home-page'>
                    <div id="home-title"><b>Caesar Cipher</b></div>
                </div>
                <div className="row" id="buttons-pad">
                <p id="home-info"><b>Caesar Cipher Info:</b> The Caesar cipher is one of the most simple encryption techniques. Each letter in the alphebet is replaced by a different letter of some fixed positions (key) either up or down the alphabet. For example with a key of 3 'a' would become 'd' and so on for each letter in the message. The only way to decrypt/decipher the original message would be to know the key and shift the letters in the opposite direction of that key, or in the modern age brute force all 52 keys. This is why this cipher is no longer used as it is too easy to crack.</p>

                    <div className="col-4">
                        <button className="btn btn-primary main-buttons" onClick={this.chooseCipher}>English to Cipher</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary main-buttons " onClick={this.chooseDecipher}>Cipher to English</button>
                    </div>
                </div>
                     <br/>
                <div id="home-footer">@Created By Austin English</div>

            </div>

        );
    }
}

export default Home;
