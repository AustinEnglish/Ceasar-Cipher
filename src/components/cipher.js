import React, { Component } from 'react';
import { HOME } from './../constants';
import CipherForm from './cipherForm';
import CiphersComponent from './ciphersComponent';


class Cipher extends Component {
    state = {

        ciphers: []
    }

    //does all the work to calculate the cipher from cipherForm.js
    onSubmitCipher = (event, cipher) => {

        event.preventDefault();

        //nothing entered
        if(cipher.cipherStr === '' || cipher.offset === ''){
                 return(<CipherForm onSubmitCipher={this.onSubmitCipher}/>)
                 
            }
    
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        //do cipher translation

        //need to toLower for comparison
        var str = cipher.cipherStr.toLowerCase();

        //need offset
        var offset = parseInt(cipher.offset);

        //string to build for cipher text
        var cipherStr = "";

        //main loop
        for (var i = 0; i < str.length; i++) {

            //invalid offset return form
            if (offset < -26 || offset > 26 || offset === '') {
                 return(<CipherForm onSubmitCipher={this.onSubmitCipher}/>)
            }


            //if theres a space add to cipher
            if (str[i] === " ") {
                cipherStr += " ";
                continue;

            }

            //get position of the current letter in relation to alphabet
            var position = alphabet.indexOf(str[i]);


            //invalid text entered return form
            if (position < 0) {
                 return(<CipherForm onSubmitCipher={this.onSubmitCipher}/>)
            }

            //0 based array, need to increment 1-26 alphabet for math
            position++;

            var offsetPositive = Math.abs(offset);

            //need to shift left
            if (offset < 0) {

                //we need to roll around A->Z
                if ((position - offsetPositive) <= 0) {
                    cipherStr += alphabet[alphabet.length - (offsetPositive - position) - 1]
                }
                else {
                    cipherStr += alphabet[position - offsetPositive - 1];
                }

            }

            //need to shift right
            else if (offset > 0) {

                //need to wrap around Z->A
                if ((position + offsetPositive) > alphabet.length) {
                    cipherStr += alphabet[(position + offsetPositive - alphabet.length) - 1]
                }
                else {
                    cipherStr += alphabet[position + offsetPositive - 1];
                }
            }

            //zero shift, same string
            else {
                cipherStr = str;
                break;
            }

        }

           let updatedList = [...this.state.ciphers, { phrase: cipher.cipherStr, offset: cipher.offset, cipherString: cipherStr }];

        this.setState({

            ciphers: updatedList


        });

    }

errorClose = ()=>{

    return(<CipherForm onSubmitCipher={this.onSubmitCipher}/>)

}

    //used to delete ciphers
    onDelete = (index) => {

        let updatedList = [...this.state.ciphers];
        updatedList.splice(index, 1);

        this.setState({
            ciphers: updatedList
        })


    }


    render() {
        return (
            <div className="cipher-results">
                <div className="inner-results">
                    <div> <button className="btn btn-primary float-right reg-buttons home-bttn" onClick={() => this.props.changePath(HOME)}>Home</button></div>
                    <h1>Cipher English Word</h1>
            
                         <CipherForm onSubmitCipher={this.onSubmitCipher}/>
                   
                    <div className="results-label"><h3><b>Results</b></h3></div>
                        <div><CiphersComponent data={this.state.ciphers} onDelete={this.onDelete} /></div>
                 
                </div>
            </div>
        );
    }
}

export default Cipher;