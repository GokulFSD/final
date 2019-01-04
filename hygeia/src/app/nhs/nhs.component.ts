import { Component, OnInit } from '@angular/core';
import { SawtoothService } from '../sawtooth.service';

import {Buffer} from 'buffer/';

@Component({
  selector: 'app-nhs',
  templateUrl: './nhs.component.html',
  styleUrls: ['./nhs.component.css']
})
export class NhsComponent implements OnInit {
  users=[];
  clickMessage="";
  servicedata="";
  Arr;
  public Num: SawtoothService;
  numba:Array<0>;
  detailsList
  name
  bty
  oty
  idp
  dat
  ran
  nam
  state
  address

  stateDt
  
//name of array you are calling from sawtoo.service is Data
  constructor(private form:SawtoothService) { 
    
    const nhs="NHS"
   
  }
  ngOnInit() {
  }

  addresser(f){
    console.log(f.value)
    this.address=this.form.getAddress(f.value.btype,f.value.otype,f.value.idproof,"NHS")
    console.log(this.address)
    this.getData()

  }

  getDecodedData(responseJSON): string {
    const dataBytes = responseJSON.data;
    const decodedData = new Buffer(dataBytes, 'base64').toString();
    return decodedData;
  }

  

  getData(){
    
    return this.form.getStateD(this.address)
      .subscribe((resp)=>{
        const dataString= JSON.stringify(resp)
        const data= JSON.parse(dataString)
        let stateDataEnc=data.data;
        let stateDecoded= atob(stateDataEnc)
        this.state=JSON.parse(stateDecoded)
        console.log("bkp 0")
        const getStateURL = 'http://localhost:4200/api/transaction/'+ this.state.Txnid;
        const fetchOptions = { method: 'GET' };
        console.log("bkp 1")
        return this.form.getTxnD(this.state.Txnid)
        .subscribe((response) => {
          
          const dt1=JSON.stringify(response)
          const dt2=JSON.parse(dt1)
          let dt3=dt2.data
          let dt4=dt3.payload
          this.stateDt=new Buffer(dt4,"base64").toString()
          let Details=this.stateDt.split(',')

        this.detailsList={
            name:Details[0],
            bty:Details[1],
            oty:Details[2],
            idp:Details[3],
            dat:Details[4],
            ran:Details[5],
            nam:Details[6]
          }
          

          console.log("Name is "+this.stateDt)

          console.log("batchlist null",this.stateDt);
          
        })
        /*.then((responseJson) => {
          console.log("batchlist null2");
          this.stateDt= this.getDecodedData(responseJson)
          console.log("bkp 3")
          
        })
        .catch((error) => {
          console.error(error);
        });*/
        
      },
      (error)=>{
        console.log(error)

      })
  }

  

  
// log(){
//   // this.numba['0']=[1,2,3];
//   this.Num=this.Form.addrArray;
//   // this.Num=this.Arr.toString;
//   console.log("ARRAY",this.Form.addrArray);
//   // console.log("ARRAY2",this.Arr);
//   // console.log("ARRAY2",this.numba);
// }
//   async getList(){
//     const servDt =await this.Form.getListData();
    

//   }

}





// import { Component, OnInit } from '@angular/core';
// import { SawtoothService } from '../sawtooth.service';

// @Component({
//   selector: 'app-nhs',
//   templateUrl: './nhs.component.html',
//   styleUrls: ['./nhs.component.css']
// })
// export class NhsComponent implements OnInit {
//   users=[];
//   clickMessage="";
//   servicedata="";
//   state;
//   address;

//   constructor(private form:SawtoothService) { 
//     console.log("Inside page component.ts")
//   }
//   ngOnInit() {
//   }
//   // async addForm(btype:string,otype:string,Gender:string,idproof:string,date:string,Name:string){
//   //  // event.preventDefault();
 
//   //  this.clickMessage="Blood type:"+btype+"Organ type:" +otype +" Gender: "+Gender + " Registration Date:"+date + " Name:" +Name ;
//   //   const proc ="NHS"
//   //   const action ="add"
//   //   const servDt =await this.Form.sendData(btype,otype,Gender,idproof,date,Name,proc,action);
    
//   //   this.servicedata="htis is service dAatta"+servDt;
//   //   //+servDt.toString();
    
//   // }
//   // async getList(){
//   //   const servDt =await this.Form.getListData();
//   // }
//   addresser(f){
//     console.log(f.value)
//     this.address=this.form.getAddress(f.value.btype,f.value.otype,f.value.idproof,"NHS")
//     console.log(this.address)
//     this.getData()

//   }

//   getData(){
    
//     return this.form.getStateD(this.address)
//       .subscribe((resp)=>{
//         const dataString= JSON.stringify(resp)
//         const data= JSON.parse(dataString)
//         let stateDataEnc=data.data;
//         let stateDecoded= atob(stateDataEnc)
//         this.state=JSON.parse(stateDecoded)
//       },
//       (error)=>{
//         console.log(error)

//       })
//   }

  


// }