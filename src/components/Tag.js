import React, { useState, useEffect } from 'react';

export default function Tag({ choice, tagChange, count }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    tagChange(e);
    setChecked(!checked);
  };

  useEffect(() => {
      setChecked(false);
  }, [count]);

  return (
    <label className="checkbox-inline mr-3">
      <input
        type="checkbox"
        value={choice}
        onChange={handleChange}
        checked={checked}
      />
      {' ' + choice}
    </label>
  );
}
