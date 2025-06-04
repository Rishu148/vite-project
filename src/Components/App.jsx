// import { useState } from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Produts";
import ProductDetails from "./ProductDetail";

// import './App.css'

// function App() {
//   // const [count, setCount] = useState(10);
//   // const[firstname, setFirstname ] = useState('')
//   // const[lastname, setLastname ] = useState('')

//   const [data, setData] = useState({
//     firstname: "",
//     lastname: ""
//   })

  

//   const handleChange = (e)=>{
//     const{name, value}= e.target;
//     // console.log(`${name}:${value}`);
//     setData((pre)=>({
//       ...pre,
//       [name]:value
//     }))
//   }


//   const handleSubmit = async (e) =>{
//     e.preventDefault() //stop the page reload while submit the form
//     console.log(data.firstname, data.lastname)
  
//   }




//   return (
//     <>
     
//      {/* <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//          </button> */}
     

//         <form onSubmit={handleSubmit}>
//           <input type="text"  id="firstname" name='firstname' placeholder='Firstname' value={data.firstname} onChange={handleChange} />
//           <input type="text"  id="lastname" name='lastname' placeholder='Lastname' value={data.lastname} onChange={handleChange} />
//         <button type='submit'>submit</button>
//         </form>
    
//     </>
//   )
// }

// export default App

  









// import { useState } from 'react';

// function App() {
//   const [fields, setFields] = useState([
//     { firstname: '', lastname: '' }
//   ]);

//   // Handle input change for specific index
//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const newFields = [...fields];
//     newFields[index][name] = value;
//     setFields(newFields);
//   };

//   // Add new empty fields
//   const handleAddMore = () => {
//     setFields([...fields, { firstname: '', lastname: '' }]);
//   };

//   // Submit all data
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("Submitting all fields:", fields);

    
//     try {
//       const response = await fetch('http://192.168.1.30:3000/test', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ users: fields })
//       });

//       if (!response.ok) {
//         throw new Error(`Server error: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log('API response:', result);

//       // Clear fields after submit
//       setFields([{ firstname: '', lastname: '' }]);

//     } catch (error) {
//       console.error('Error submitting data:', error.message);
//     }
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Multiple Users Form</h2>
//       <form onSubmit={handleSubmit}>
//         {fields.map((field, index) => (
//           <div key={index} style={{ marginBottom: '1rem' }}>
//             <input
//               type="text"
//               name="firstname"
//               placeholder="Firstname"
//               value={field.firstname}
//               onChange={(e) => handleChange(index, e)}
//               required
//               style={{ marginRight: '0.5rem' }}
//             />
//             <input
//               type="text"
//               name="lastname"
//               placeholder="Lastname"
//               value={field.lastname}
//               onChange={(e) => handleChange(index, e)}
//               required
//             />
//           </div>
//         ))}

//         <button type="button" onClick={handleAddMore} style={{ marginRight: '1rem' }}>
//           Add More
//         </button>

//         <button type="submit">Submit All</button>
//       </form>
//     </div>
//   );
// }

// export default App;





// import Api from "./Components/ApiFetch";

// function App(){
//   let a = "abcd"
//   return(
//     <>
//    <Api data = {a} />
//     </>
//   )
// }+

// export default App





 





const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;


















// import { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products);
//         setLoading(false);
        
//       })
//       .catch((err) => {
//         console.error("API Error:", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <h1 className="text-4xl font-extrabold text-center text-gray-800 my-8">
//         🛍️ Featured Products
//       </h1>

//       {loading ? (
//         <div className="flex-1 flex justify-center items-center ">
//           {/* Spinner and Text */}
//           <div className="flex flex-col justify-center items-center">
//             <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
//             <p className="text-gray-600 text-lg font-medium animate-pulse">
//               Loading products...
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden"
//             >
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800 truncate">
//                   {product.title}
//                 </h2>
//                 <p className="text-sm text-gray-500 mt-1 mb-2 truncate">
//                   {product.description}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-lg font-bold text-blue-600">
//                     ${product.price}
//                   </span>
//                   <span className="text-sm bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
//                     {product.rating} ⭐
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
