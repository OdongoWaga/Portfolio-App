import React, { Component } from 'react';
import Link from 'next/link';
import '../../styles/main.scss'

class Header extends Component {
  render() {
    return (
      <>
        <p className='customClassFromFile'> I am  a stylish P</p>
      <Link href='/'>
        <a>Home </a>
        </Link>
        <Link href='/about'>
        <a>About </a>
        </Link>
        <Link href='/blogs'>
        <a>Blogs</a>
        </Link>
        <Link href='/cv'>
        <a>CV </a>
        </Link>

        <style jsx>
        {`
        a {
            font-size: 50px;
  
        };
        .customClass {
            color: red;
        }
        `
        }
        </style>
        
      </>
    )
  }
}

export default  Header;