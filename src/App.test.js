/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/src/App.test.js
 */
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
