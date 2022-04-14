import React, { useState, useEffect } from 'react';
import Tag from './Tag';

export default function Tags({ tagsUpdated, count }) {
  const tagChoices = [
    'node',
    'javascript',
    'react',
    'jamstack',
    'Serverless',
    'AWS',
    'Netlify',
    'Lambda',
    'Drupal',
    'Airtable'
  ];

  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    setSelectedTags([]);
  }, [count]);

  useEffect(() => {
      tagsUpdated(selectedTags);
  }, [selectedTags, tagsUpdated]);

  const tagChange = (e) => {
    const { value, checked } = e.target;

    setSelectedTags(
      selectedTags.filter( tag => tag !== value )
    );

    if ( checked ) {
      setSelectedTags([...selectedTags, value]);
    }
  };

  return (
    <>
      {tagChoices.map((choice, index) => (
        <Tag 
          choice={choice}
          tagChange={tagChange}
          count={count}
          key={"form-" + choice + index}
        />
      ))}
    </>
  );
}
