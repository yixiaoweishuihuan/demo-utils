import Form from './form'
import selectExpand from './selectExpand'
import formDynamic from './formDynamic'
import formComponent from './formComponent'
const descArray = [Form, selectExpand, formDynamic, formComponent]
const descMap = {}
descArray.forEach(item => {
  descMap[item.name] = item.description
})
export default descMap
