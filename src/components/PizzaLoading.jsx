import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoading() {
  return (
    <div>
      <ContentLoader
        speed={1}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f6f6f6"
        foregroundColor="#ecebeb">
        <circle cx="117" cy="100" r="97" />
        <rect x="3" y="211" rx="0" ry="0" width="234" height="20" />
        <rect x="6" y="246" rx="0" ry="0" width="229" height="63" />
        <rect x="12" y="328" rx="0" ry="0" width="70" height="24" />
        <rect x="105" y="320" rx="22" ry="22" width="130" height="46" />
      </ContentLoader>
    </div>
  );
}

export default PizzaLoading;
