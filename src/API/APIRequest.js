import axios from "axios";
let BaseUrl='http://localhost:3333'

export function AnswerSubmitRequest(data) {
    let URL = BaseUrl + "/answer";
 let PostBody=data
 console.log(data)
  
    return axios
      .post(URL,PostBody)
      .then((res) => {
            
          if (res.status === 200) {
        
                return true
              
          }else{
           
              return false
          }
      })
      .catch((err) => {
        //call end
         
        return false;
      });
  }

  export function GetAllQuestions() {
    //call start
    
    let URL = BaseUrl + "/questions";
 
  
    return axios
      .get(URL)
      .then((res) => {
            
          if (res.status === 200) {
        
                return res
              
          }else{
           
              return false
          }
      })
      .catch((err) => {
        //call end
         
        return false;
      });
  }
  export function GetAllAnswer() {
    //call start
    
    let URL = BaseUrl + "/answer";
 
  
    return axios
      .get(URL)
      .then((res) => {
            
          if (res.status === 200) {
        
                return res.data
              
          }else{
           
              return false
          }
      })
      .catch((err) => {
        //call end
         
        return false;
      });
  }
  export function DeleteAllAnswer() {
    //call start
    
    let URL = BaseUrl + "/answer";
 
  
    return axios
      .delete(URL)
      .then((res) => {
            
          if (res.status === 200) {
        
                return true
              
          }else{
           
              return false
          }
      })
      .catch((err) => {
        //call end
         
        return false;
      });
  }