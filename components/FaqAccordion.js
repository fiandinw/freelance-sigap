import { useState } from "react"

function FaqAccordion(props) {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div onClick={toggleActive} className="flex flex-col w-full items-center px-32 2xl:px-32">
      <div className={`text-hijau-tua ${!isActive ? 'rounded-xl' : 'rounded-t-xl'} p-4 text-xl flex items-center justify-between w-full`}>
        <p>{props.title}</p><i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
      </div>
      <div className={`text-hijau-tua text-lg rounded-lg w-full overflow-hidden ${!isActive ? 'h-0 px-0' : 'h-fit px-8'} transition-all`}>
        {props.description}
      </div>
    </div>
  )
}

export default FaqAccordion