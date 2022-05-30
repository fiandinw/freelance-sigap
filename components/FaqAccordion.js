import { useState } from "react"

function FaqAccordion(props) {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="flex flex-col w-full items-center px-16 2xl:px-32">
      <div onClick={toggleActive} className={`text-sigap-ijo font-bold ${!isActive ? 'rounded-xl' : 'rounded-t-xl'} p-4 border-2 text-xl flex items-center justify-between w-full cursor-pointer`}>
        <p>{props.title}</p><i className={`fa ${!isActive ? "fa-plus" : "fa-minus"} fa-xl`} aria-hidden="true"></i>
      </div>
      <div className={`text-hitam text-lg rounded-b-lg w-full overflow-hidden ${!isActive ? 'h-0 px-0' : 'h-fit px-8 py-2 border-2 border-t-0'} transition-all`}>
        {props.description}
      </div>
    </div>
  )
}

export default FaqAccordion