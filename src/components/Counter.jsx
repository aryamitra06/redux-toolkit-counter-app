import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "../redux/counter";

export default function Counter() {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter);
    return (
        <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">
                                {count}
                            </h3>
                            <div className="d-flex gap-3 mt-3">
                                <button className="btn btn-primary w-50" onClick={() => dispatch(decrement())}>Decrement</button>
                                <button className="btn btn-primary w-50" onClick={() => dispatch(increment())}>Increment</button>
                            </div>
                            <div className="d-flex gap-3 mt-2">
                                <button className="btn btn-primary w-50" onClick={() => dispatch(decrementByAmount(10))}>Decrement By 10</button>
                                <button className="btn btn-primary w-50" onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
