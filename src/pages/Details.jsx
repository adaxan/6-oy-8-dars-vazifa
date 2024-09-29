// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function Details() {
//   const params = useParams();
//   const [telephones, setTelephones] = useState({});

//   useEffect(() => {
//     fetch(`https://auth-rg69.onrender.com/api/products/${params.id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setTelephones(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       {telephones.length > 0 &&
//         telephones.map(function (phone) {
//           return (
//             <div key={phone.id} className="base-container">
//               <h2 className="text-center">{phone.name}</h2>
//               <h3>${phone.price}</h3>
//               <p>{phone.description}</p>
//             </div>
//           );
//         })}
//     </div>
//   );
// }
import React from 'react'

function Details() {
  return (
    <div>
      <h3>salom</h3>
    </div>
  )
}

export default Details
