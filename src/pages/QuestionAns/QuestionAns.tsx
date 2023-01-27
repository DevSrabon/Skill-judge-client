
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {  useAuth } from '../../contexts/AuthProvider';

const QuestionAns = () => {
  // const { user }: any = useContext(AuthContext);
  const { user }: any = useAuth();
  const { register, handleSubmit } = useForm();
  console.log("This is from Q & A : ",user)
        //  const qnaData:any = useLoaderData();
         const [refetch,setRefetch]=useState(false)
         const [qnaData,setqnaData]=useState([])
         
         
        //  const handleSubmit =(e)=>{
        //     e.preventDefault();
        //     const form=e.target.form;
        //     const q=form.question.value
        //     console.log(q);
            
        //  }

        
        console.log("All Question : ",qnaData);
        const questionSubmit=(data)=>{
          const questionInfo={
            question:data.question,
            userName : user.displayName,
            usrId:user.uid,
            userImage:user.photoURL
          }
          // console.log("User INfo question :",questionInfo)
          fetch('http://localhost:5000/send-question',{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(questionInfo)
          })
          .then(res => res.json())
          .then(data=>{
           if(data.message){
            toast.success(data.message)
            setRefetch(!refetch)
           }
           
          })
        }

        useEffect(()=>{
          fetch("https://skill-judge-server.vercel.app/qna")
          .then(res=>res.json())
          .then(data=>setqnaData(data))
        },[refetch])
    return (
      <div className="mx-20 ">
        <div className="flex justify-end">
          <label
            htmlFor="my-modal-3"
            className="rounded-xl p-2 text-white bg-slate-700"
          >
            Add Your Question
          </label>

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              {/* this is modal form for added question */}
             <form className='card p-3'
             onSubmit={handleSubmit(questionSubmit)}
             >
              
             <input type="text" placeholder="Type your question" className="input w-full input-bordered"
             
             {...register("question")}
             />
            <button type='submit' className="btn btn-accent my-10">submit</button>
             </form>
            </div>
          </div>
        </div>
        {/* <div>
        <input type="text" placeholder="Type your question" className="input w-full input-bordered"
           onChange={handleSearchChange}
           />
        </div> */}
        {qnaData?.map((qna: any) => (
          <div className="shadow-lg flex mb-3 p-3 rounded-md justify-between">
            <div className="flex gap-3">
              <img
                className="rounded-full w-10 h-10"
                src={qna?.userImage}
                alt=""
              />
              <div>
                <h1 className="font-bold">{qna.userName}</h1>
                <h2>{qna.question}</h2>
              </div>
            </div>
            <Link
              to={`../singleqna/${qna._id}`}
              className="bg-sky-500 hover:bg-sky-700 p-3 rounded-xl"
            >
              Go
            </Link>
          </div>
        ))}
      </div>
    );
};

export default QuestionAns;