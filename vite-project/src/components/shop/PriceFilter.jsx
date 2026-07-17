import React, { useState } from "react";
import { Range, getTrackBackground} from "react-range";
const PriceFilter = () => {
    const [values, setValues] = React.useState([50, 100]);
    return (
        <div className="mt-10">
            <div className="flex items-center justify-between">
                <h3 className="font-jost font-medium text-[18px] text-primary-black mb-2.75">PRICE</h3>
                <span className="text-gray-500">⌃</span>
            </div>

            {/* Range */}
            <Range
                label="Select your value"
                step={0.1}
                min={0}
                max={100}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "6px",
                            width: "100%",
                            borderRadius: "20px",
                            backgroundColor: "#ccc",
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        key={props.key}
                        style={{
                            ...props.style,
                            height: "18px",
                            width: "18px",
                            borderRadius: "50%",
                            border: "1px solid black",
                            backgroundColor: "white",
                        }}
                    />
                )}
            />

            <div className="flex items-center justify-between mt-3">
                <p className='font-jost font-normal text-sm leading-10 text-secondary'>Min Price: <span className='text-primary-black'> $29</span></p>

                <p className='font-jost font-normal text-sm leading-10 text-secondary'>Max Price: <span className='text-primary-black'> $937</span></p>
            </div>
        </div>
    )
}

export default PriceFilter