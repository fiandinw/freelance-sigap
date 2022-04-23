import { useState } from "react"

function FaqAccordion(props) {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div onClick={toggleActive} className="flex flex-col items-center">
      <div className="text-abuabu bg-hijau-tua rounded-lg p-4 text-lg flex items-center">
        {props.title}<span className="mr-4"></span><i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
      </div>
      <div className={`bg-hijau-tua text-abuabu rounded-b-lg max-w-xl overflow-hidden transition-all ${!isActive ? 'h-0 p-0' : 'h-fit p-2'}`}>
        {props.description}
      </div>
    </div>
  )
}

export default FaqAccordion