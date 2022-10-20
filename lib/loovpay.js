"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

const Accept = 'application/x-www-form-urlencoded';
const Content_Type = 'application/json';
const Cookie = "XSRF-TOKEN=eyJpdiI6InR4ZXJVM0tBZmlveDM3VkNPeTNXM0E9PSIsInZhbHVlIjoibWNTTndlS3J5dU5QTnpsNDVENWZJdklvOWx4bk5Od3FIVXZyVEkzdmlDS2V0T04veUdST3FTU053em0yOXZ3OG1ja1N1MzdqYzBzUndrOGc1NHBvVVdwOXhwMWNxOHBvVG45VmMzNXE3MzFUaGRsNncydDVya3VpTzhmWmVNU2kiLCJtYWMiOiIyNDcwY2IwZmM0MzJkNzc0OGVlNGYyM2E4NmYwMTBhODViMWU3N2YzNWZmZjY5OTk2ZWRiMmE0MTQxMzBjOTAyIiwidGFnIjoiIn0%3D; loov_solutions_session=eyJpdiI6ImhxTWZpYmc5S25nY2dvRWpnSVhhMUE9PSIsInZhbHVlIjoiV0FjS1pxR1lOcXBCc2FWWmFPcjgvWnJTMkZwYmZNanNldzJhTVppUTlQTzlTazJYV1pVVm4zeW1tMFZNL2tUWnczQ2dQcWEvamtyM2ZITlFaT0llNnQ1S2FEV29leGZhaVcyTHl4c0VIcU5MSUlLa2MrcDhOZzI3V0pTTUtseDgiLCJtYWMiOiI2NDE5NTNkZTNhZDFlMTNkODg1YjYzZTQwN2U1NjMzNTk1N2ZhODNiNmZjODZlMjkzNGE4MjA5NjVmYmI5YjM1IiwidGFnIjoiIn0%3D";
const baseUrl = 'https://api.loov-solutions.com/api/';
var xhr = new XMLHttpRequest()
xhr.withCredentials = true;
var  HEADER = JSON.stringify({
    Accept: Accept,
    Cookie: Cookie,
    Content_Type: Content_Type,
    'merchant-key': '',
    'app-key': ''
});  


function LoovSdk( marchant_key, api_key){
    if (!marchant_key)
    throw new TypeError('marchant_key is required');
if (typeof marchant_key !== 'string')
    throw new TypeError('marchant_key is required to be a string');
if (!api_key)
    throw new TypeError('api_key is required');
if (typeof api_key !== 'string')
    throw new TypeError('api_key is required to be a string');
}

const inintPayment=  function(payload) {
   var param  ={
        amount:payload.amount,
        sender_curency:payload.sender_curency,
        return_url:payload.return_url,
        cancel_url:payload.cancel_url,
        notify_url:payload.notify_url
    }
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
    
    
    xhr.open("POST", `${baseUrl}payments/generate`);
    xhr.setRequestHeader(HEADER);
    try{
        return new Promise((resolve, reject) => {
            xhr.send(param);            
        });
    }catch(error){
        return error
    }
}

const verifyPayemnt= function(refrence,) {
   
    if (!refrence)
        throw new TypeError('refrence is required');
    if (typeof refrence !== 'string')
        throw new TypeError('transaction refrence is required to be a string');
       
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
              console.log(this.responseText);
            }
          });

    xhr.open("GET", `${baseUrl}payments/status/${refrence}`);
    xhr.setRequestHeader(HEADER);
    
    try{
        return new Promise((resolve, reject) => {
            xhr.send();            
        });
    }catch(error){
        return error
    }
}


module.exports = {LoovSdk, verifyPayemnt, inintPayment};

