import './App.css';
import PchCategoryList from './componets/PchCategoryList.js';
import { useEffect, useState } from 'react';
import axios from './api/PchApi.js';
import PchCategoryFrom from './componets/PchCategoryForm.js';

function App() {
  const [PchCategories, setPchCategories] = useState([]);
  
  const getCategories = async () => {
    try {
      const PchResponse = await axios.get("PchCategory");
      setPchCategories(PchResponse.data);  
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const [PchCategoryIsFrom, setPchCategoryIsFrom] = useState(false);

  const PchHandleAddNew = (param) => {
    setPchCategoryIsFrom(param);

  }

  const PchHandleCategoryCloseForm = (param) => {
    setPchCategoryIsFrom(param);
  }

  const PchHandleCategorySubmit = (param) => {
    let id = PchCategories[PchCategories.length - 1].PchId;
    console.log("ma: ", id);
    param.PchId = id + 1;
    PchCategories.push(param);
    setPchCategories((prev) => {
      return [...prev];
    })
    setPchCategoryIsFrom(false);
  }

  return (
    <div className="container border my-3">
      <h1>Trương Đình Tuyển Call API</h1>
      <PchCategoryList renderPchCateGories={PchCategories} onAddNew={PchHandleAddNew} />
      <hr />
      {
        PchCategoryIsFrom === true ? <PchCategoryFrom onCloseForm={PchHandleCategoryCloseForm} onCategorySubmit={PchHandleCategorySubmit} /> : ""
      }
      
    </div>
  );
}

export default App;