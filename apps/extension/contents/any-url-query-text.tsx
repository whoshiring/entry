import cssText from "data-text:~styles/global.css"
import type { PlasmoCSConfig } from "plasmo"

import { useMessage } from "@plasmohq/messaging/hook"

export const config: PlasmoCSConfig = {
  all_frames: true
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const QueryTextAnywhere = () => {
  const { data } = useMessage<string, string>(async (req, res) => {
    res.send(document.querySelector(req.body).textContent)
  })
  return (
    <div className="p-2 bg-zinc-900 text-red-300 text-3xl">
      Querying Selector for - {data}
    </div>
  )
}

export default QueryTextAnywhere
