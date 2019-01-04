/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

// works in strict mode


// require the handler module.
// declaring a constant variable.
const { TransactionHandler } = require('sawtooth-sdk/processor/handler');


const {
  InvalidTransaction,
  InternalError,
} = require('sawtooth-sdk/processor/exceptions');
const crypto = require('crypto');
const { TextEncoder, TextDecoder } = require('text-encoding/lib/encoding');

const _hash = x => crypto.createHash('sha512').update(x).digest('hex').toLowerCase();
const encoder = new TextEncoder('utf8');
const decoder = new TextDecoder('utf8');
const MIN_VALUE = 0;
const CJ_FAMILY = 'hygieia';
const CJ_NAMESPACE = _hash(CJ_FAMILY).substring(0, 6);
let addrList = [];


class HygieiaHandler extends TransactionHandler {
  constructor() {
    super(CJ_FAMILY, ['1.0'], [CJ_NAMESPACE]);
    // console.log("Inside constructor")
  }

  decodepayload(payload) {
    const payloadDecoded = {
      bgroup: payload[0],
      part: payload[1],
      Gender: payload[2],
      idNo: payload[3],
      Date: payload[4],
      name: payload[5],
      proc: payload[6],
      action: payload[7],
    };
    return payloadDecoded;
  }

  removeAddress(address) {
    Array.prototype.remByVal = function (address) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === address) {
          this.splice(i, 1);
          i--;
        }
      }
      return this;
    };
  }

  apply(transacationProcessRequest, context) {
    let newTxnId = '';
    let newStatus = '';
    let newRecp = '';
    // console.log("HelloWorldlkfkhdkfshfgs!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    // payload decoding*****
    const payload = transacationProcessRequest.payload.toString().split(',');
    const pl = this.decodepayload(payload);
    // console.log(pl.bgroup+","+pl.part +","+pl.Gender +","+ pl.idNo+ ","+pl.Date +","+ pl.name+ ","+ pl.proc)

    // address generation*****************
    /* let signerPk=transacationProcessRequest.header.signerPublicKey;
            console.log(signerPk.toString())
            const publicKeyHash= _hash(signerPk) */
    const header = transacationProcessRequest.header;
    const pblckey = header.signerPublicKey;
    const ipaddr = header.inputs[0];
    const superAddress = _hash('hygieia').substring(0, 70);
    // +_hash(pl.part).substr(0,4)+_hash(pl.bgroup).substr(0,4)+
    
    // let btypeHash=crypto.createHash('sha512').update('group').digest('hex').toLowerCase()

    // _hash("hygieia").substr(0, 6) +"00"+"00"+
    // let address=ipaddr
    // console.log("address"+address)d=
    const txnId = transacationProcessRequest.signature;
    

    if (pl.action == 'add') {
      const address = _hash('hygieia').substr(0, 6) + _hash(pl.proc).substr(0, 16) + _hash(pl.bgroup).substr(0, 16) + _hash(pl.part).substr(0, 16) + _hash(pl.idNo).substr(0, 16);

      return context.getState([address, superAddress])
        .then((currentStateMap) => {
          console.log('currentStateMap-->', currentStateMap);
          const prevMyState = currentStateMap[superAddress];
          console.log('prevMyState', prevMyState);
          const prevState = new Buffer(prevMyState, 'base64').toString();
          console.log('prevState', prevState);
          let addrLst = [];

          if (Object.keys(prevMyState).length !== 0) {
            console.log('not empty');
            const superState = decoder.decode(prevMyState);
            const superJson = JSON.parse(superState);
            addrLst = superJson.address;
          }

          addrLst.push(address);
            console.log('addrlst--->', addrLst);
            const addressJson = {
              address: addrLst,
            };
            const addressString = JSON.stringify(addressJson);
            const addressEncoded = encoder.encode(addressString);
            const superVal = {
              [superAddress]: addressEncoded,
            };

          


         const myState = currentStateMap[address];
          if (myState == '' || myState == null) { // registering from NHS
            newTxnId = txnId;
            newStatus = 'Unmatched';
            newRecp = '';

            // adding state
            const stateData = {
              Status: newStatus,
              Txnid: newTxnId,
              Recp: newRecp,

            };         
            
            const mynewState = encoder.encode(JSON.stringify(stateData));
            console.log('mynewState', mynewState);
            const newStateMap = {
              [address]: mynewState,
              
            };
            
            //   // ,
            // const newStateMap = new Map ()
            //   newStateMap.set(address,mynewState)
            //   newStateMap.set(superAddress,mynewList)
            context.setState(superVal);
            return context.setState(newStateMap);
            /* .then((newAddress)=>{

                    const newAddrMAp={
                      [superAddress]:mynewList
                    }

                    return context.setState(newAddrMAp)

                  }) */
          }

          console.log('Address already in use');

          /*return context.getState([superAddress])
            .then((currentStateMap) => {
              const prevMyState = currentStateMap[superAddress];
              console.log('prevMyState', prevMyState);

              const prevState = new Buffer(prevMyState, 'base64').toString();
              console.log('prevState', prevState);

     
              const mynewList = encoder.encode(addrList.toString());
              const newAddrMAp = {
                [superAddress]: mynewList,
              };

              return context.setState(newAddrMAp);
              
                   const getStateURL = "http://localhost:8008/transactions/"+stateJson.Txnid;
                    const fetchOptions = { method: 'GET' };
                    return window.fetch(getStateURL, fetchOptions);

});*/
        });
    }

    if (pl.action == 'modify') {
      const address = _hash('hygieia').substr(0, 6) + _hash('NHS').substr(0, 16) + _hash(pl.bgroup).substr(0, 16) + _hash(pl.part).substr(0, 16) + _hash(pl.idNumber).substr(0, 16);

      return context.getState([address])
        .then((currentStateMap) => {
          const myState = currentStateMap[address];
          const oldstate = decoder.decode(myState);

          console.log('inside modify');

          if (myState == '' || myState == null) { // registering from NHS
            console.log('Address not used to add data');
          } else {
            newTxnId = txnId;
            newStatus = 'Matched';
            newRecp = 'Txn002';

            addrList = addrList.removeAddress(address);
            console.log(addrList);
          }
        });
    }
  }
}
module.exports = HygieiaHandler;
