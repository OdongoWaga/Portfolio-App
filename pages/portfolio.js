import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
          <BaseLayout>
        <Link href='/portfolio'>
        <a>Portfolio </a>
        </Link>
        <h1>I am a portfolio page</h1>
          </BaseLayout>
      </div>
    )
  }
}
