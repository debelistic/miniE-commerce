import React from "react"
import '../App.css'


export default function Footer() {
  return (
    <div className="container-fluid m-auto container fin-footer" align="center">
      <footer className="footer flex-center">
        <div>
          <a href="/">Shop Now</a>
          <span> &copy; 2020 Shop Now.</span>
        </div>
        <div className="ml-auto">
          <span>Powered by</span>
          <a href="https://github.com/debelistic">Debelistic</a>
        </div>
      </footer>
    </div>
  )
}
