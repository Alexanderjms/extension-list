import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl">Hello World</h1>
      <nav>
        <ul>
          <li>
            <Link href="/page-one">Go to Page One!</Link>
          </li>
          <li>
            <Link href="/page-two">Go to Page Two!</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;