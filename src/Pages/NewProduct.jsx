import React, { useEffect, useState } from 'react';
import axios from "axios"

const NewProduct = () => {

  const[isloading,setisLoading]= useState(false);
  const[error,SetError]=useState(null)
 const[categoryList,setCategoryList]=useState([])
 const[subCategoryList,setSubcategoryList]=useState([])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    colors: [],
    tags: [],
    thumbnail: '',
    brandName: '',
    deliveryCharge: '',
    returnPolicyDays: '',
    discount: '',
    category: 'Fashion',
    subCategory:"",
  });

useEffect(()=>{
 async function  fetchData(){
  try {
    const respone =  await axios("http://localhost:8000/api/category");
    if(respone&&respone.data){
      setCategoryList(respone.data.data);
    }
    if(formData.category){
      const respone =  await axios(`http://localhost:8000/api/sub-category/${formData.category}`);
      if(respone&&respone.data){        
        setSubcategoryList(respone.data.data);
        formData.subCategory=respone.data.data[0].subCategory
      }
    }
  } catch (error) {
    console.log(error);
    
    SetError(error)
  }
}
fetchData()

},[formData.category])


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'colors') {
      // Handle color checkbox
      setFormData((prev) => {
        let updatedColors = [...prev.colors];
        if (checked) {
          updatedColors.push(value);
        } else {
          updatedColors = updatedColors.filter((color) => color !== value);
        }
        return { ...prev, colors: updatedColors };
      });
    } else if (name === 'tags') {
      // Handle tags input
      setFormData((prev) => ({
        ...prev,
        tags: prev.tags.filter(tag => tag !== '') // Remove any empty tags from array
      }));
    } else if (type === 'file') {
      // Handle file input
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.files[0], // Store the selected file
      }));
    } else {
      // Handle normal input fields (text, number, etc.)
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, e.target.value.trim()],
      }));
    }

  };
  
  

function handleFormSubmit(e) {
  e.preventDefault(); // Prevent default form submission behavior
  console.log(formData);
  
  setisLoading(true)
  // Send data using axios with multipart/form-data content type
  axios.post('http://localhost:8000/api/product/new', formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Let the server know it's multipart data
      // Add any other headers if needed (e.g., authentication token)
      // 'Authorization': 'Bearer yourAuthToken',
    }
  })
  .then((response) => {
    console.log('Product created successfully:', response.data);
    if(response&&response.data){
      
    }
    // Handle the successful response (e.g., reset the form or show success message)
  })
  .catch((error) => {
    SetError(error.message||"something went wrong")
    console.error('There was an error submitting the form:', error);
    // Handle the error (e.g., show an error message)
  })
  .finally(()=>{
    setisLoading(false)
  })

 setFormData( {
    title: '',
    description: '',
    price: '',
    stock: '',
    colors: [],
    tags: [],
    thumbnail: '',
    brandName: '',
    deliveryCharge: '',
    returnPolicyDays: '',
    discount: '',
    category: 'Fashion',
  })
}




  return (
    <section className='container flex flex-col gap-3 mx-auto'>
     
        <h1 className='text-3xl'>Basic Information</h1>
        <div className='bg-gray-100 p-4'>
          <label className='text-xl' htmlFor="title">Title</label> <br />
          <input onChange={handleChange} name='title' value={formData.title} id='title' className='bg-slate-400 p-2 w-2/3 text-xl rounded-md' type="text" />
        </div>

        <div className='bg-gray-100 p-4'>
          <label className='text-xl mb-2' htmlFor="description">Description</label> <br />
          <textarea onChange={handleChange} value={formData.description} className='bg-slate-400 w-2/3 h-40 rounded-md' name="description" id="description"></textarea>
        </div>

        <div className='grid grid-cols-3 p-3 gap-5 justify-items-center bg-gray-100 grid-rows-3'>
          <div>
            <label className='text-xl' htmlFor="price">Price</label> <br />
            <input onChange={handleChange} value={formData.price} className='bg-slate-400 p-2 text-xl rounded-md' name='price' id='price' type="text" />
          </div>

          <div>
            <label className='text-xl' htmlFor="category">Category</label> <br />
            <select onChange={handleChange} value={formData.category} className='bg-slate-400 p-2 inline-block w-60 text-xl rounded-md' name="category" id="category">
             { 
              categoryList.map((e,index)=>{
                return <option key={index} value={e.category}>{e.category}</option>
              })
             }
            </select>
          </div>



          <div>
            <label className='text-xl' htmlFor="subCategory">Sub-Category</label> <br />
            <select onChange={handleChange} value={formData.subCategory}  className='bg-slate-400 p-2 inline-block w-60 text-xl rounded-md' name="subCategory" id="subCategory">
             { 
              subCategoryList.map((e,index)=>{
                return <option key={index} value={e.subCategory}>{e.subCategory}</option>
              })
             }
            </select>
          </div>


          <div>
            <label className='text-xl' htmlFor="brandName">Brand</label> <br />
            <input onChange={handleChange} value={formData.brandName} className='bg-slate-400 p-2 text-xl rounded-md' id='brandName' name='brandName' type="text" />
          </div>

          <div>
            <label className='text-xl' htmlFor="discount">Discount (%)</label> <br />
            <input onChange={handleChange} value={formData.discount} className='bg-slate-400 p-2 text-xl rounded-md' name='discount' id='discount' type="text" />
          </div>

          <div>
            <label className='text-xl' htmlFor="stock">Stock</label> <br />
            <input onChange={handleChange} value={formData.stock} className='bg-slate-400 p-2 text-xl rounded-md' name='stock' id='stock' type="text" />
          </div>

          <div>
            <label className='text-xl' htmlFor="deliveryCharge">Delivery Charge</label> <br />
            <input onChange={handleChange} value={formData.deliveryCharge} className='bg-slate-400 p-2 text-xl rounded-md' name='deliveryCharge' id='deliveryCharge' type="text" />
          </div>

          <div>
            <label className='text-xl' htmlFor="returnPolicyDays">Return Policy Days</label> <br />
            <input onChange={handleChange} value={formData.returnPolicyDays} className='bg-slate-400 p-2 text-xl rounded-md' name='returnPolicyDays' id='returnPolicyDays' type="text" />
          </div>
        </div>

        {/* Color Selection */}
        <div className='bg-gray-100 p-4 flex flex-col gap-2'>
          <h1 className='text-xl'>Choose Colors</h1>
          <div className='flex gap-3'>
            {['red', 'blue', 'green', 'orange', 'white'].map((color) => (
              <div className='text-xl' key={color}>
                <label className='text-x' htmlFor={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</label> &nbsp;
                <input
                  type="checkbox"
                  name="colors"
                  id={color}
                  value={color}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className='bg-gray-100 p-4 rounded-md'>
          <label className="text-xl" htmlFor="tags">Tags</label> <br />
          <div className="tags-input-container">
            <input
              id="tags"
              name="tags"
              className="bg-slate-400 p-2 text-xl rounded-md"
              type="text"
              placeholder="Add tags"
              onKeyDown={handleAddTag}
            />
            <div id="tags-list" className="tags-list mt-2 flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <p key={index} className='border-2 p-1'>
                  {tag} &nbsp;
                  <i className="fa-solid fa-x fa-sm" onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      tags: prev.tags.filter(t => t !== tag),
                    }));
                  }}></i>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail */}
        <div className='bg-gray-100 p-4 rounded-md'>
          <label className='text-xl' htmlFor="thumbnail">Thumbnail</label> <br />
          <input type="file"  onChange={handleChange} name='thumbnail' id='thumbnail' />
        </div>


   <div className='flex justify-center'>
    <button disabled={isloading} onClick={handleFormSubmit} className='p-2 rounded-md bg-red-500 w-44 text-white font-semibold'>Add Product</button>
   </div>


    
    </section>
  );
};

export default NewProduct;
