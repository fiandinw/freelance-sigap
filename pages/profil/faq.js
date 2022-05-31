import Sidebar from "../../components/Sidebar";
import FaqAccordion from "../../components/FaqAccordion";

export default function Profil() {
  return (<>
    <Sidebar/>
      <div className="ml-72 p-8 flex flex-col gap-4">
      <FaqAccordion title="title" description="desc"/>
      <FaqAccordion title="title" description="desc"/>
      <FaqAccordion title="title" description="desc"/>
      <FaqAccordion title="title" description="desc"/>
      <FaqAccordion title="title" description="desc"/>
      <FaqAccordion title="title" description="desc"/>
      <FaqAccordion title="title" description="desc"/>
    </div>
  </>)
}