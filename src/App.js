import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useFormik } from 'formik';
import * as Yup from 'yup'

function App() {
    const validate = Yup.object({
      first:Yup.string().min(2,'Too short').max(20).required('Name must be required..!'),
      last:Yup.string().min(2,'Too short').max(20).required('Name must be required..!'),
      date:Yup.date().required('Date must be required..!'),
      gender:Yup.string().required('Gender must be required...!'),
      street:Yup.string().required('Street must be required...!'),
      city:Yup.string().required('City must be required...!'),
      region:Yup.string().required('Region must be required...!'),
      country:Yup.string().required('Country must be required...!'),
      mf_name:Yup.string().min(1,'Too short').max(30).required('Name must be required...!'),
      phone:Yup.number().max(10).min(10).required('Phone Number must be required...!'),
      code:Yup.number().min(6).required('Code must be required...!'),
      occu:Yup.string().min(1,'Too short').max(30).required('Occupation must be required...!'),
  })

  const init = {
    first:'',
    last:'',
    date:'',
    gender:'',
    street:'',
    city:'',
    code:'',
    region:'',
    country:'',
    mf_name:'',
    phone:'',
    occu:'',
  }

  const {values, handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    initialValues:init,
    validationSchema:validate,
    onSubmit:(values) => {
      console.log(values);
  }
  })
  console.log(values);
  return (
    <>
    <div className='background'>
        <div className='form p-4'> 
        <h1>Student Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <label className="text-start w-100 mb-1">Name Of Student </label>

            <div className="d-flex mb-3">
              <div className='w-50 me-1'>
                <input type="text" placeholder="First" className="w-100 p-1" name='first' value={values.first} onChange={handleChange} onBlur={handleBlur}></input>
                { errors.first && touched.first ? <span className='text-start d-block'>{errors.first}</span> : null }
              </div>
              <div className='w-50 ms-1'>
                <input type="text" placeholder="Last" className="w-100 p-1" name='last' value={values.last} onChange={handleChange} onBlur={handleBlur}></input>
                { errors.last && touched.last ? <span className='text-start d-block'>{errors.last}</span> : null }
              </div>
            </div>

            <label className="text-start w-100 mb-1">Date Of Birth</label>
            <input type="date" className="w-100 p-1 mb-4" name='date' value={values.date} onChange={handleChange} onBlur={handleBlur}></input>
            { errors.date && touched.date ? <span className='text-start d-block mb-4'>{errors.date}</span> : null }


            <label className="text-start w-100 mb-1">Gender</label>
            <div className="d-flex mb-4 text-start">
              <div className="w-50">
                <input type="radio" className="me-1 p-1" name="gender" value='male' onChange={handleChange} onBlur={handleBlur}></input>
                <label>Male</label>
              </div>
              <div className="w-50">
                <input type="radio" className="me-1 p-1" name="gender" value='Female' onChange={handleChange} onBlur={handleBlur}></input>
                <label>Female</label>
              </div> 
            </div>
              { errors.gender && touched.gender ? <span  className='text-start d-block mb-4'>{errors.gender}</span> : null }

            <label className="text-start w-100 mb-1">Address</label>
            <input type='text' placeholder="Street Address" className="w-100 mb-3 p-1"  name='street' value={values.street} onChange={handleChange} onBlur={handleBlur}></input>
            { errors.street && touched.street ? <span  className='text-start d-block mb-4'>{errors.street}</span> : null }

            <div className="d-flex mb-4">
              <div className='w-50'>
                  <input type="text" placeholder="City" className="w-100 me-1 p-1" name='city' value={values.city} onChange={handleChange} onBlur={handleBlur}></input>
                  { errors.city && touched.city ? <span  className='text-start d-block mb-4'>{errors.city}</span> : null }
              </div>
             <div  className='w-50'>
                <input type="text" placeholder="Region" className="w-100 ms-1 p-1" name='region' value={values.region} onChange={handleChange} onBlur={handleBlur}></input>
                { errors.region && touched.region ? <span  className='text-start d-block mb-4'>{errors.region}</span> : null }
             </div>
            </div>

            <div className="d-flex mb-4">
              <div className='w-50'>
                  <input type="text" placeholder="Postal/zip Code" className="w-100 me-1 p-1" name='code' value={values.code} onChange={handleChange} onBlur={handleBlur}></input>
                  { errors.code && touched.code ? <span  className='text-start d-block mb-4'>{errors.code}</span> : null }
              </div>
              <div className='w-50'>
              <select className="w-100 me-1 p-1" name='country'  onChange={handleChange} onBlur={handleBlur}>
                <option className='p-1'>Country</option>
                <option className='p-1' value="India">India</option>
                <option className='p-1' value="Russia">Russia</option>
                <option className='p-1' value="Gabon">Gabon</option>
                <option className='p-1' value="New Zealand">New Zealand</option>
                <option className='p-1' value="Afghanistan">Afghanistan</option>
              </select>
              { errors.country && touched.country ? <span  className='text-start d-block mb-4'>{errors.country}</span> : null }

              </div>
            </div>

            <label className="text-start w-100">Mother's and Father's Name</label>
            <textarea className='w-100  mb-4 p-1' name='mf_name' value={values.mf_name} onChange={handleChange} onBlur={handleBlur}></textarea>
            { errors.mf_name && touched.mf_name ? <span  className='text-start d-block mb-4'>{errors.mf_name}</span> : null }

            <label className="text-start w-100 mb-1">Mother's or Father's Phone</label>
            <input type="text" placeholder="#####-#####" className="w-100 p-1 mb-4" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur}></input>
            { errors.phone && touched.phone ? <span  className='text-start d-block mb-4'>{errors.phone}</span> : null }

            <label className="text-start w-100">Mother's and Father's Occupation</label>
            <textarea className='w-100  mb-4 p-1' name='occu' value={values.occu} onChange={handleChange} onBlur={handleBlur}></textarea>
            { errors.occu && touched.occu ? <span  className='text-start d-block mb-4'>{errors.occu}</span> : null }

            <input type="submit" className="w-100"></input>
          </form>
        </div>
    </div>
    </>
  );
}

export default App;
