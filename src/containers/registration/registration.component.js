import { useForm } from "react-hook-form";

import './registration.css';
import useRegistration from './useRegistration';
import Banner from '../../components/banner/banner';

function Registration(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {
    navigate,
    telephoneNumbersIndexes,
    relativesIndexes,
    addTelephoneNumber, 
    addRelatives
  } = useRegistration();

  return (
    <div>
      <Banner
        title="Register New Contact"
        subtitle="Fill contact form"
        buttonTitle="Move to Dashboard"
        buttonFunction={() => navigate('/dashboard', { replace: true })}
      />
      <div className="container mx-auto">
        <form className="flex flex-col" onSubmit={(event) => props.submit(handleSubmit, event, errors)}>
          <input className="border p-2 m-3" {...register("name", { required: true })} placeholder="name"/>
          <input className="border p-2 m-3" {...register("idCardNumber", { required: true })} placeholder="id card number"/>
          <input className="border p-2 m-3" {...register("job", { required: true } )} placeholder="job"/>
          <input type="date" className="border p-2 m-3" {...register("birthDate", { required: true })} placeholder="birthdate"/>
          <textarea className="border p-2 m-3" {...register("address", { required: true })} placeholder="address"/>
          {telephoneNumbersIndexes.map(index => {
            const fieldName = `phoneNumber[${index}]`;
            return (
              <input className="border p-2 m-3" {...register(fieldName, { required: true })} placeholder="phone number"/>
            );
          })}
          <button type="button" className="font-bold bg-red-100 p-2 m-3 rounded-xl" onClick={addTelephoneNumber}>Add Telephone Number</button>
          {relativesIndexes.map(index => {
            const fieldName = `relatives[${index}]`;
            return (
              <>
                <div className='container flex-row'>
                  <input className="border p-2 m-3" {...register(`${fieldName}.name`, { required: true })} placeholder="name"/>
                  <input type="date" className="border p-2 m-3" {...register(`${fieldName}.birthDate`, { required: true })} placeholder="birthdate"/>
                  <select className="border p-2 m-3" {...register(`${fieldName}.relation`, { required: true })} placeholder="relation">
                    <option value="parent">parent</option>
                    <option value="brother">brother</option>
                    <option value="sister">sister</option>
                    <option value="child">child</option>
                  </select>
                </div>
              </>
            );
          })}
          <button type="button" className="font-bold bg-red-100 p-2 m-3 rounded-xl" onClick={addRelatives}>Add Relative</button>
          <button type="submit" className="font-bold bg-green-100 p-2 m-3 rounded-xl">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
