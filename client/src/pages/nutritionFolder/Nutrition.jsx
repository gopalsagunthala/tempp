import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import './Nutrition.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

const Nutrition = () => {

  const navigate = useNavigate()
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.post("http://localhost:4000/auth/verify")
    .then(res=>{
      if(!(res.data==="verified"))
        navigate('/signin')
    })
  },[navigate])

  const [food, setFood] = useState('');
  const [nutritionData, setNutritionData] = useState([]);

  async function fetchData() {
    const options = {
      method: 'GET',
      url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
      params: {
        query: food
      },
      headers: {
        'X-RapidAPI-Key': '57bdea98c8msh11726cb27834af0p12d8eejsn519597279ab3',
        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setNutritionData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleFood(e) {
    e.preventDefault();
    fetchData();   
  }

  return (
    <div>
      <div className='nutrition_analysis'>
        <h1 style={{color:'black'}} className='title'>Nutrition Analysis</h1>
        <form onSubmit={handleFood}>
          <label htmlFor="input" className='lable'  id="username" name="username"></label>
          <br /><br />
          <input type="text" value={food} onChange={(e) => setFood(e.target.value)} className='food-input' placeholder="Enter the Food :"/>
          <button type="submit" className='get-nutrition'>Get Nutrition</button>
        </form>
        {nutritionData.length > 0 && (
          <div className="nutrition-info">
            {nutritionData.map((item, index) => (
              <div key={index}>
                <h2>Nutrition Information for {item.name}</h2><br />
                <ul className='nutrition-info-list'>
                  <li><FaArrowRightLong /> Serving Size (g): {item.serving_size_g}</li><br />
                  <li><FaArrowRightLong /> Calories: {item.calories}</li><br />
                  <li><FaArrowRightLong /> Carbohydrates Total (g): {item.carbohydrates_total_g}</li><br />
                  <li><FaArrowRightLong /> Cholesterol (mg): {item.cholesterol_mg}</li><br />
                  <li><FaArrowRightLong /> Fat Saturated (g): {item.fat_saturated_g}</li><br />
                  <li><FaArrowRightLong /> Fat Total (g): {item.fat_total_g}</li><br />
                  <li><FaArrowRightLong /> Fiber (g): {item.fiber_g}</li><br />
                  <li><FaArrowRightLong /> Potassium (mg): {item.potassium_mg}</li><br />
                  <li><FaArrowRightLong /> Protein (g): {item.protein_g}</li><br />
                  <li><FaArrowRightLong /> Sodium (mg): {item.sodium_mg}</li><br />
                  <li><FaArrowRightLong /> Sugar (g): {item.sugar_g}</li><br />
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='image'></div>

    </div>
  );
};

export default Nutrition;
