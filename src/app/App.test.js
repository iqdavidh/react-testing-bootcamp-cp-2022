import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'


//jest.mock("../model/useAppState")
//jest.mock("../model/AppContext")


import App from './App';
import AppContext from "../model/AppContext";

import CMain from "../components/CMain";
import CFooter from "../components/CFooter";
import React from "react";

describe('App', function () {

  
  test('renders', () => {
    let isShowModal=false;
    const appState= {
      getIsShowModal:()=>isShowModal,
      setIsShowModal:(b)=>isShowModal=b
    }
    
    render(
      <AppContext.Provider value={appState}>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered mb-5">
              NASA's picture of the day
            </h1>
            <CMain />
            <CFooter/>
          </div>
        </section>
      </AppContext.Provider>
    )
    expect(screen.getByText("davidh")).toBeInTheDocument();
  });
});
