// import { useRef, useState } from 'react';

// import Card from '../UI/Card';
// import LoadingSpinner from '../UI/LoadingSpinner';
// import classes from './QuoteForm.module.css';

// const isEmpty = value => value.trim() === '';

// const QuoteForm = props => {
//   const authorInputRef = useRef();
//   const textInputRef = useRef();

//   function submitFormHandler(event) {
//     event.preventDefault();

//     const enteredAuthor = authorInputRef.current.value;
//     const enteredText = textInputRef.current.value;

//     // optional: Could validate here
//     let isEmptyForm = isEmpty(enteredAuthor) || isEmpty(enteredText);
//     if (isEmptyForm) {
//       return;
//     }

//     props.onAddQuote({ author: enteredAuthor, text: enteredText });
//     alert('Add new quote success!');
//   }
//   return (
//     <Card>
//       <form className={classes.form} onSubmit={submitFormHandler}>
//         {props.isLoading && (
//           <div className={classes.loading}>
//             <LoadingSpinner />
//           </div>
//         )}

//         <div className={classes.control}>
//           <label htmlFor='author'>Author</label>
//           <input
//             type='text'
//             id='author'
//             name='author'
//             required
//             ref={authorInputRef}
//           />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor='text'>Text</label>
//           <textarea
//             id='text'
//             rows='5'
//             name='text'
//             required
//             ref={textInputRef}
//           ></textarea>
//         </div>
//         <div className={classes.actions}>
//           <button className='btn'>Add Quote</button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default QuoteForm;
