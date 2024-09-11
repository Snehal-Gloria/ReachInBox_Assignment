// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AllMails from './AllMails';
// import image from "../assets/NavBar/image.png";

// const Inbox = () => {
//   const [inboxData, setInboxData] = useState([]);  // State to store inbox data
//   const token = localStorage.getItem('jwtToken');

//   useEffect(() => {
//     if (token) {
//       // Fetch inbox data using the token
//       axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       })
//       .then(response => {
//         setInboxData(response.data);  // Store data in state
//         console.log('Inbox data:', response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching inbox data', error);
//       });
//     }
//   }, [token]);

//   return (
//     <div className="mx- mt-48 lg:ml-[36rem]">
//         <img src={image} alt="logo" className="w-auto h-auto" />
//         <h3 className='text-white font-medium text-balance pt-7'>It’s the beginning of a legendary sales pipeline </h3>
//         <p className='text-balance text-neutral-500 pt-7 '>When you have inbound E-mails you’ll see them here</p>
      
//       {/* <div className="p-4">
//         {inboxData.length > 0 ? (
//           <ul>
//             {inboxData.map((mail, index) => (
//               <li key={index} className="p-2 mb-2 border-b border-gray-400">
//                 <p><strong>From:</strong> {mail.sender}</p>
//                 <p><strong>Subject:</strong> {mail.subject}</p>
//                 <p><strong>Message:</strong> {mail.body}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No messages in the inbox.</p>
//         )}
//       </div> */}

// <div className="min-h-screen bg-black text-white">
//       <AllMails />  {/* Fetch and display all emails */}
//     </div>
//     </div>
//   );
// };

// export default Inbox;
