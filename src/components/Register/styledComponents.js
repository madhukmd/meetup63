import styled from 'styled-components'

export const RegisterContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterContent = styled.div`
  display: flex;
  justify-content: space-between;
  //   align-items: center;
  width: 80%;
  max-width: 900px;
`
export const RegisterImage = styled.img`
  width: 450px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const FormHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 50px;
  color: #334155;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin-bottom: 5px;
  font-weight: bold;
`
export const Input = styled.input`
  border: 1px solid #64748b;
  height: 38px;
  outline: none;
  padding-left: 10px;
  margin-bottom: 30px;
  border-radius: 5px;
`
export const Select = styled.select`
  border: 1px solid #64748b;
  height: 38px;
  outline: none;
  padding-left: 10px;
  border-radius: 5px;
`
export const Option = styled.option``
export const RegisterButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #2563eb;
  color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: 'Roboto';
  font-size: 15px;
  align-self: flex-start;
  margin-top: 30px;
  margin-bottom: 0;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
  margin-top: 3px;
  font-weight: 600;
`
