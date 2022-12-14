import { createSlice } from "@reduxjs/toolkit";
const initialBooks = {
    books: [ { id: 1, title: "Love Bangladesh", author: "Anisul Islam" },
             { id: 2, title: "Bangladeshi", author: "Anisul Islam" },
    ],
  };

export const booksSlice=createSlice(
    {
         name: "books",
    
         initialState: initialBooks,
         reducers:{
            showBooks:(state)=>state,
            addBook: (state, action) => {
              state.books.push(action.payload);
            },
            deleteBooks:(state,action)=>{
              const id=action.payload
              state.books=state.books.filter((book)=>book.id !== id)
            },
            updateBooks:(state,action)=>{
              const { id, title, author } = action.payload;


              const isExist=state.books.filter(book=>book.id===id)
              console.log(isExist)
              if(isExist){
               
                isExist[0].title=title
                isExist[0].author=author
              }
            }

         },

    })

    export const{showBooks,addBook,deleteBooks,updateBooks}=booksSlice.actions;
    export default booksSlice.reducer;

  
