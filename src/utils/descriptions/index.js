import Form from './form'
import selectExpand from './selectExpand'
import formDynamic from './formDynamic'
import formComponent from './formComponent'
import chatGPT from './chatGPT'
const descArray = [Form, selectExpand, formDynamic, formComponent, chatGPT]
const descMap = {}
descArray.forEach(item => {
  descMap[item.name] = item.description
})
export default descMap
