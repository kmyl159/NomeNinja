import {useState,useEffect,useCallback} from  'react'
import Modal from '../Components/modal'
import { mask } from '../config/mask'
import {
  Container,
  FormContainer,
  FormField,
  FormName,
  FormInput,
  SubmitBtn,
  FormTitle,
  ErrorImput,
  SubmitContainer
} from '../styles/form'

const useFormik = ({
  initialValues,
  validate
})=>{
  const [touched,setTouched] =useState({})
  const [success,setSuccess] = useState(false);
  const [values,setValues] =useState(initialValues)
  const [step,setStep] = useState(1)
  const [errors,setErrors] = useState({})

  useEffect(()=>{
    validateValues(values)
  },[values])

  const handleChance = (event)=>{
    const fieldName = event.target.getAttribute('id');
    const value = event.target.value
    setValues({
      ...values,
      [fieldName]: value
    });
  }
  const handleMask = useCallback((event)=>{
    const fieldName = event.target.getAttribute('id');
    const fieldValue = event.target.value;
    const newValue = mask[fieldName](fieldValue,event)
    setValues({
      ...values,
      [fieldName]: newValue
    });
  })
  const validateValues = (values)=>{
    setErrors(validate(values,step));
  }
  const handleBlur = (event)=>{
    const fieldName = event.target.getAttribute('id');
    setTouched({
      ...touched,
      [fieldName]: true,
    });
  }
  

  return {
    values,
    errors,
    step,
    touched,
    success,
    setSuccess,
    handleBlur,
    setStep,
    handleMask,
    setErrors,
    handleChance,
    validateValues,
  }
}


const PersonalDataForm = ({formik})=>{
  const FieldNames = ['Nome','CPF','Data de Nascimento'];
  const formikVariables = ['userName','userCpf','userData'];
  const placeholders = [
    'Example: "Carlos augusto"',
    'Example: "555.555.555-55"',
    'Example: "01.01.2001"',
  ];

  const submit = (event)=>{
    event.preventDefault();
    if(Object.keys(formik.errors).length === 0){
      formik.setStep(formik.step + 1)
    }
  }


  return(
    <FormContainer>
      {FieldNames.map((field,index)=>{
        return(
          <FormField key={index}>
            <FormName>{field}</FormName>
            <FormInput
              placeholder={placeholders[index]}
              id={formikVariables[index]}
              value={formik.values[formikVariables[index]]}
              onBlur={formik.handleBlur}
              onKeyUp={formik.handleMask}
              onChange={formik.handleChance}>
            </FormInput>
            { formik.touched[formikVariables[index]] &&
              formik.errors[formikVariables[index]]  && 
              <ErrorImput>{formik.errors[formikVariables[index]]}</ErrorImput>}
          </FormField>
        )
      })}
      <SubmitContainer>
        <SubmitBtn onClick={submit}>Enviar</SubmitBtn>
      </SubmitContainer>
    </FormContainer>
  )
}
const CardDataForm = ({formik})=>{
  const FieldNames = ['Agência','Conta','Válidade'];
  const formikVariables = ['cardAgency','cardAccount','cardValidity'];
  const placeholders = [
    'Example: "00001"',
    'Example: "555555-5"',
    'Example: "09/23"',
  ];

  const submit = (event)=>{
    event.preventDefault();
    if(Object.keys(formik.errors).length === 0){
      formik.setSuccess(true)
    }
  }
  const toBack = (event)=>{
    event.preventDefault();
    formik.setStep(formik.step - 1)
  }

  return(
    <FormContainer>
      {FieldNames.map((field,index)=>{
        return(
          <FormField key={index}>
            <FormName>{field}</FormName>
            <FormInput
              placeholder={placeholders[index]}
              id={formikVariables[index]}
              value={formik.values[formikVariables[index]]}
              onBlur={formik.handleBlur}
              onKeyUp={formik.handleMask}
              onChange={formik.handleChance}>
            </FormInput>
            { formik.touched[formikVariables[index]] &&
              formik.errors[formikVariables[index]] && 
              <ErrorImput>{formik.errors[formikVariables[index]]}</ErrorImput>}
          </FormField>
        )
      })}
      <SubmitContainer>
        <SubmitBtn onClick={toBack}>Voltar</SubmitBtn>
        <SubmitBtn onClick={submit}>Enviar</SubmitBtn>
      </SubmitContainer>
    </FormContainer>
  )
}

const Form = ()=>{
  const formik = useFormik({
    initialValues: {
      userName: "",
      userCpf: "",
      userData: "",
      cardAgency: "",
      cardAccount: "",
      cardValidity: "",
    },
    validate: function (values,step) {
      const errors = {}
      if(step === 1){
        if(values.userName === ''){
          errors.userName = 'Por favor insira um nome válido';
        }
  
        if(values.userCpf === '' 
          ||values.userCpf.length > 14){
          errors.userCpf = 'Por favor insira um cpf válido';
        }
        if(values.userData === ''
          ||values.userData.length > 10){
          errors.userData = 'Por favor insira uma data válida';
        }
      }
      if(step=== 2){
        if(values.cardAgency === ''
          ||values.cardAgency.length > 4){
          errors.cardAgency = 'Por favor insira uma agência válida';
        }
        if(values.cardAccount === ''
          ||values.cardAccount.length > 19){
          errors.cardAccount = 'Por favor insira uma conta válida';
        }
        if(values.cardValidity === ''
          ||values.cardValidity.length > 5){
          errors.cardValidity = 'Por favor insira uma data válida';
        }
      }
      return errors;
    }
  })
  const message = 'Parabéns seu cartão foi clonado com sucesso!'
  
  const TouggleModal = ()=>{
    formik.setSuccess(false)
  }
 
  return (
    <>
      <Container>
      <FormTitle>Descubra seu Nome Ninja!</FormTitle>
        {formik.step === 1 ?
          <PersonalDataForm formik={formik}/>  :
          <CardDataForm formik={formik}/>}
      </Container>
      {formik.success && <Modal TouggleModal={TouggleModal} Message={message} />}
    </>
  )
}

export default Form