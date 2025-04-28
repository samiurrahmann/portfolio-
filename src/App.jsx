import React from 'react';

const App = () => {
  return (
   <> <div>
       <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <ul className="menu bg-base-200 rounded-box w-56">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
    </div>
    <div className="mockup-phone border-primary">
  <div className="mockup-phone-camera"></div>
  <div className="mockup-phone-display">
    <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp"/>
  </div>
</div>
    </>
  );
};

export default App;