import {useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import.meta.env.VITE_API_TREES_PERENUAL

export default function Magasin() {
    const dispatch = useDispatch();
    const magasin = useSelector(state => state.magasin);
    let data = [];
    useEffect(() => {

      axios.get(`https://perenual.com/api/species-list?key=${import.meta.env.VITE_API_TREES_PERENUAL}`)
      .then( result => {
        console.log(result.data.data);
        data = result.data.data



      })
      .catch(err => err.message)

    }, [])


  return (
    <ul>
      {console.log(data)}
      {data && (
        data.forEach(el => (
          <li key={el.id} className='inline-block m-5'>
             {el.default_image.small_url}
          </li>
        ))
      )}
    </ul>
  )
}
