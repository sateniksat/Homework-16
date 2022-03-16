import React from 'react'
import { useEffect,useCallback,memo,useState,useRef } from "react";
import Button from "./Button";
import Title from "./Title";



/**
 * you should use useRef, useCallback, memo, useState.
 * don't remove console logs,
 * check console before and after your chnages
 */


function UseMemoCallBack() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));

  /**
   * create two states called value1 and value 2
   */
   const [value1,setFirst] = useState('1');
   const [value2,setSecond] = useState('2');
  /**
   * create ref for each input (ref1, ref2) and pass them to input elements
   */
   const ref1 = useRef('');
   const ref2 = useRef('');


   /**
    * get value of input from ref and set first state
    */
  const changeValue1 =useCallback(() => {
      setFirst(ref1.current.value);
    },[ref1]);

    /**
     * get value of input from ref and set second state
     */
  const changeValue2 =useCallback(() => {
    setSecond(ref2.current.value);
  },[ref2]);
  /**pass first state */
  return (
    <div className="App">
      <div className="value-1">
        first value: <Title>{value1}</Title>
        <br />
        change first value:
        <input  ref={ref1}/>
        <Button onClick={changeValue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{value2}</Title>
        <br />
        change second value:
        <input  ref={ref2}/>
        <Button onClick={changeValue2}> change </Button>
      </div>
    </div>
  );
}
export default memo(UseMemoCallBack);
