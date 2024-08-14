import {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setTrees, treesLevels} from '../features/magasin';



export default function Magasin() {
    const dispatch = useDispatch();
    const trees = useSelector(state => state.magasin.trees);
    const player = useSelector(state => state.player);
    const magasin = useSelector(state => state.magasin);

   let priceStartCoeff = 1.2;

    useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5500/images/`);
           
          const data = response.data;
          dispatch(setTrees(data.images));

          dispatch(treesLevels(player.level))
          



       
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchData();
    }, [dispatch]);
  


    return (
      // 
      <>
      {console.log(trees)}
      {magasin.isLockShop && (<div className='fixed top-6 left-[20%] p-8 rounded-lg w-[800px]  bg-green-600 '>
              
        <p className='font-bold text-xl'>Store :</p>
            <ul className=' flex flex-row flex-wrap list-none'>
  
          {(trees.length && trees.map((tab, index) => (
            
            tab.map((el,index) => (
                  <li key={index} className='flex flex-col m-8 list-none w-3 h-12 justify-start '>
                  <img src={`http://localhost:5500/images/${el}`} className=' flex max-w-fit cursor-pointer w-16 border rounded-lg hover:scale-75 hover:border-blue-400 ' alt="image arbre" />
                  <p className='font-bold text-lg'> {(priceStartCoeff * magasin.price) * (index + 10) }$ </p>
                  </li>
                ))
            
            ))          
          )}
          </ul>
      </div>)}
      
      </>
  )
}
