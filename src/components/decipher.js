import React, { Component } from 'react';
import { HOME } from './../constants';
import DecipherForm from './decipherForm';
import DeciphersComponent from './deciphersComponent';


class Decipher extends Component {
    state = {
        Deciphers: []
    }



    decipherFunc = (offset, cipherInput) => {


        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        //do cipher translation

        //need to toLower for comparison
        var str = cipherInput.toLowerCase();

        //string to build for cipher text
        var cipherStr = "";

        for (var i = 0; i < str.length; i++) {

            //if theres a space add to cipher
            if (str[i] === " ") {
                cipherStr += " ";
                continue;

            }

            //get position of the current letter in relation to alphabet
            var position = alphabet.indexOf(str[i]);

            //invald word
            if (position < 0) {
                cipherStr = "";
                break;
            }


            //0 based array, need to increment 1-25 alphabet for math
            position++;

            //get abs of offset for math
            var offsetPositive = Math.abs(offset);

            //need to shift left if neg
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

        return cipherStr;
    }





    //does all the work to calculate the cipher from cipherForm.js
    onSubmitCipher = (event, cipher) => {

        event.preventDefault();


        var guessArray = [];

        //go through all indexs
        var offset = -26;

        while (offset <= 26) {

            //invalid string entered
            if (this.decipherFunc(offset, cipher) === "") {
                return (<DecipherForm onSubmitCipher={this.onSubmitCipher} />)
            }

            guessArray.push(this.decipherFunc(offset, cipher));

            offset++;
        }

        this.setState({

            Deciphers: guessArray

        });


    }



    render() {
        return (
            <div className="cipher-results">
                <div className="inner-results">
                    <div> <button className="btn btn-primary float-right reg-buttons home-bttn" onClick={() => this.props.changePath(HOME)}>Home</button></div>
                    <h1> Decipher Caesar Cipher</h1>
                    <div> <DecipherForm onSubmitCipher={this.onSubmitCipher} /> </div>
                    <div className="results-label"><h3><b>Results</b></h3></div>
                    <div> <DeciphersComponent data={this.state.Deciphers} /> </div>

                </div>
            </div>
        );
    }
}

export default Decipher;