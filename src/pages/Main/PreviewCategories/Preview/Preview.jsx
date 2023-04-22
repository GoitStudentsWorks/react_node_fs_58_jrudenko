// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Preview = ({ data }) => {
//   const [mainMeals, setMainMeals] = useState([]);
//   const [isShow, setIsShow] = useState(false);

//   const toogle = () => {
//     setIsShow(prevState => !prevState);
//   };

//   return (
//     <>
//       <div className={`${css.previewContainer} ${'container'}`}>
//         <Link
//           to={`/categories/${
//             data[0].charAt(0).toUpperCase() + data[0].slice(1)
//           }`}
//         >
//           {data[0].charAt(0).toUpperCase() + data[0].slice(1)}
//         </Link>
//         <ul>
//           {data[1].map(
//             ({
//               category,
//               description,
//               favorite,
//               like,
//               popularity,
//               preview,
//               time,
//               title,
//               _id,
//             }) => (
//               <li key={_id}>
//                 <DishCard
//                   id={_id}
//                   isShow={isShow}
//                   toogle={toogle}
//                   image={preview}
//                   altText={description}
//                   text={title}
//                   favorite={favorite}
//                   like={like}
//                   allData={mainMeals}
//                   setAllData={setMainMeals}
//                   popularity={popularity}
//                 />
//               </li>
//             )
//           )}
//         </ul>
//       </div>
//       {/* <div>
//         <Button
//           isLink
//           href={`/categories/${
//             data[0].charAt(0).toUpperCase() + data[0].slice(1)
//           }`}
//           label={'See all'}
//         />
//       </div> */}
//     </>
//   );
// };

// export default Preview;
