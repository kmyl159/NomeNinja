export const userName = (value,event) =>{
  const cleanValue  = value.replace(/\d/g,"");
  return cleanValue;
}
export const userCpf = (value,event) =>{
  const cleanValue  = value.replace(/\D/g,"");
  event.target.maxLength = 14;
  const maskValue  = cleanValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");
  return maskValue;
}
export const userData = (value,event) =>{
  const cleanValue  = value.replace(/\D/g,"");
  event.target.maxLength = 10;
  const maskValue  = cleanValue.replace(/(\d{2})(\d{2})(\d{4})/g,"$1/$2/$3");
  return maskValue;
}
export const cardAgency = (value,event) =>{
  const cleanValue  = value.replace(/\D/g,"");
  event.target.maxLength = 4;
  const maskValue  = cleanValue.replace(/(\d{4})/g,"$1");
  return maskValue;
}
export const cardAccount = (value,event) =>{
  const cleanValue  = value.replace(/\D/g,"");
  event.target.maxLength = 19;
  const maskValue  = cleanValue.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g,"$1 $2 $3 $4");
  return maskValue;
}
export const cardValidity = (value,event) =>{
  const cleanValue  = value.replace(/\D/g,"");
  event.target.maxLength = 5;
  const maskValue  = cleanValue.replace(/(\d{2})(\d{2})/g,"$1/$2");
  return maskValue;
}

module.exports = {
  mask: {
    userName,
    userCpf,
    userData,
    cardAgency,
    cardAccount,
    cardValidity,
  }
}