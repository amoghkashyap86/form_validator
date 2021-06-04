class Form_validator{
    isIndianMobileNumber=(number)=>{
      const regex=/^(91)?[6789][0-9]{9}$/
      if(regex.test(number)){
          return true;
      }else{
          return false;
      }
  }
   isValidPassword=(password,numberofuppercaseletters=1,numberoflowercaseletters=1,numberofdigits=1,numberofspecialcharacters=1,maxchar=8)=>{
      if(maxchar<0){
          return false
      }if(numberoflowercaseletters+numberofspecialcharacters+numberofuppercaseletters+numberofdigits>maxchar){
          return Error("please select the appropriate parameters")
      }
      const lowercaseregx=new RegExp(`[a-z]{${numberoflowercaseletters},}`,'g')
      const uppercaseregx=new RegExp(`[A-Z]{${numberofuppercaseletters},}`,'g')
      const numberregx=new RegExp(`[0-9]{${numberofdigits},}`,'g')
   const specialcharregx=new RegExp(`[a-zA-Z0-9]`,'g')
  
      if(password.match(lowercaseregx)&&password.match(uppercaseregx)&&password.match(numberregx)&&password.match(specialcharregx)&&password.length>=8){
          return true;
      }else{
          return false;
      }
         
  }
  
   isValidEmail=(email)=>{
      const emailregx=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(email.match(emailregx)){
                    return true;
                }else{
                    return false;
                }
  }
    isAlphaNumneric=(alphanumericstr)=>{
         const alphnumericregx=/^[a-zA-Z0-9]*$/
         if(alphanumericstr.match(alphnumericregx)){
             return true;
         }else{
             return false;
         }
  }
  }
  module.exports=new Form_validator();
  