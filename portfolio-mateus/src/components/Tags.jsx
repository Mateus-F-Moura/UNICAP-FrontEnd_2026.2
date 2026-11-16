import React from 'react';

export default function Tags({ items }) { return <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>; }
