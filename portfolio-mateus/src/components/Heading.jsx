import React from 'react';

export default function Heading({ label, title, children }) { return <header className="page-heading">
<p className="eyebrow">{label}</p>
<h1>{title}</h1>
<p>{children}</p>
</header>; }
