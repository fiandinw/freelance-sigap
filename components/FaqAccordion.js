import { useState } from "react"

function FaqAccordion(props) {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div onClick={toggleActive} className="flex flex-col w-full items-center px-96">
      <div className={`text-hijau-tua ${!isActive ? 'rounded-xl' : 'rounded-t-xl'} p-4 text-sm flex items-center justify-between w-full`}>
        <p>{props.title}</p><i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
      </div>
      <div className={`text-hijau-tua text-xs rounded-lg w-full overflow-hidden transition-all ${!isActive ? 'h-0 p-0' : 'h-fit px-8'}`}>
        {props.description}
      </div>
    </div>
  )
}

export default FaqAccordion