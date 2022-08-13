import './index.css'

const increaseValue = () => {
  const counterValue = document.getElementById('counterValue')
  const value = parseInt(counterValue.innerHTML)
  const btnEl = document.getElementById('count-btn')
  const increaseFun = () => {
    counterValue.innerHTML = value + 1
  }
  btnEl.addEventListener('click', increaseFun)
}

const element = (
  <div className="container">
    <div className="matter-container">
      <h1 className="heading">
        The Button has been clicked{' '}
        <span id="counterValue" className="counterEl">
          0
        </span>{' '}
        times
      </h1>
      <p className="paragraph">Click the button to increase the count</p>
      <button
        id="count-btn"
        onClick={increaseValue}
        type="submit"
        className="countBtn"
      >
        Click Me!
      </button>
    </div>
  </div>
)

const createdElement = () => element
export default createdElement
