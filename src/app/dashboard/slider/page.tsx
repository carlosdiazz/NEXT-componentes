"use client";

import { Slider } from "@/components";
import { useState } from "react";

export default function SliderPage() {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10,20])

  return (
    <div className="grid grid-cols-1 gap-3">
      <span>Sldier Valuer: {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        max={100}
        step={10}
        onValueChange={(value) => setSliderValue(value[0])}

      />
      <span>Sldier Valuer: {rangeValue.join("-")}</span>
      <Slider
        defaultValue={rangeValue}
        max={100}
        step={5}
        onValueChange={setRangeValue}

      />
    </div>
  );
}
