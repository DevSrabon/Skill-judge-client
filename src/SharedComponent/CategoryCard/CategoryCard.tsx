import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../assets/Data/CategoryData.json'
const CategoryCard = () => {
    
    return (
        <div>
            <div>
                <h4 className='text-3xl font-bold'>Select Your Programming Language</h4>
            </div>
           
           <div className='grid grid-cols-3 gap-4 my-10'>
            {
               Data.map((item:any)=>{
                return (
                  <Link  to={`/categorie/${item.CategoryId}`}>
                    <div>
                    <div className="card bg-base-100 shadow-xl">
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        
                        </div>
                      </div>
                    </div>
                  </Link>
                 
                );
               })
            }
           </div>
            
        </div>
    );
};

export default CategoryCard;